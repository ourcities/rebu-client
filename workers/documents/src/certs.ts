import fetch from 'node-fetch';
import { promisify } from 'util';
import { setImmediate } from 'timers';

const setImmediateP = promisify(setImmediate)

async function mapItem(mapFn: (arg0: any, arg1: any, arg2: any) => any, currentValue: any, index: any, array: any) {
  try {
    await setImmediateP()
    return {
      status: 'fulfilled',
      value: await mapFn(currentValue, index, array)
    }
  } catch (reason) {
    return {
      status: 'rejected',
      reason
    }
  }
}

async function worker(id: number, gen: Generator<any[], void, unknown>, mapFn: any, result: any[]) {
  console.time(`Worker ${id}`)
  for (let [currentValue, index, array] of gen) {
    console.time(`Worker ${id} --- index ${index} item ${currentValue}`)
    result[index] = await mapItem(mapFn, currentValue, index, array)
    console.timeEnd(`Worker ${id} --- index ${index} item ${currentValue}`)
  }
  console.timeEnd(`Worker ${id}`)
}

function* arrayGenerator(array: string | any[]) {
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index]
    yield [currentValue, index, array]
  }
}

async function mapAllSettled(arr: string | any[], mapFn: (url: any, i: any) => Promise<{ i: any; url: any; contents: Array<string>; }>, limit = arr.length) {
  const result: any[] = []

  if (arr.length === 0) {
    return result
  }

  const gen = arrayGenerator(arr)

  limit = Math.min(limit, arr.length)

  const workers = new Array(limit)
  for (let i = 0; i < limit; i++) {
    workers.push(worker(i, gen, mapFn, result))
  }

  console.log(`Initialized ${limit} workers`)

  await Promise.all(workers)

  return result
}

async function mapFnCheckIP(c: any) {
  await delay(100)
  const mobilizations = await mapAllSettled(c.mobilizations, checkIP, 1)
  return { ...c, mobilizations }
}

const slugify = (string: string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const getMobilizations: any = async () => {
  const query = `query myEntries($widgetId: Int) {
        communities(order_by: {created_at: desc} ) {
            id
            name
            dns_hosted_zones(where: {ns_ok: {_eq: true}}) {
            id,
            domain_name
            }
            mobilizations(where: {custom_domain: {_neq: "null"}}){
            id,
            name,
            custom_domain
            }
        }
    }`

  const resp = await fetch(process.env.GRAPHQL_URL, {
    "headers": {
      "x-hasura-admin-secret": process.env.GRAPHQL_SECRET_KEY,
      "content-type": "application/json",
    },
    "body": JSON.stringify({
      query,
    }),
    "method": "POST",
  });

  return await resp.json();
}

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const checkIP = async (m: any) => {
  console.log(`validating DNS ${m.custom_domain}`);
  // https://stackoverflow.com/a/58299823/397927
  //   console.log(m);
  try {
    let geoip = { Answer: [{ data: '' }] };
    const r = await fetch(`https://dns.google/resolve?name=${m.custom_domain}`);
    geoip = await r.json();

    // console.log(geoip);
    // console.log((isArray(geoip.Answer) && geoip.Answer[0].data === '54.156.173.29'));
    return ((Array.isArray(geoip.Answer) && geoip.Answer[0].data === '50.19.148.209') ? m : false);
  } catch (error) {
    console.log(error);
    return false;
  }
}

let dockerComposeTemplate =
  `version: '2'
services:`;

// sofisticar o valor do host do serviço para incluir domínios com www e sem www
let dockerComposeServiceTemplate = (element_name: any, validatedDNS: any) => `
  ${slugify(element_name)}:
    image: nossas/bonde-public-ts:0.3.4
    environment:
${process.env.TPL_SERVICE_ENV}
    command:
      - yarn
      - start
    labels:
      traefik.port: '3000'
      traefik.enable: 'true'
      traefik.frontend.rule: Host:${validatedDNS.map((c: any) => {
        const d = c.value.custom_domain;
        if (d !== undefined) {
          return d + ',' + d.replace('www.', '');
        }
        return '';
      }).join(',')};
      traefik.acme: 'true'`;

const dockerComposeService = (community: any, validatedDNS: any) => {
  // console.log(community, validatedDNS);
  if ((validatedDNS !== undefined) && (validatedDNS.length >= 50)) {
    let dockerComposeContent: string = '', i: number, j: number, temparray: any, chunk = 50;
    for (i = 0, j = validatedDNS.length; i < j; i += chunk) {
      temparray = validatedDNS.slice(i, i + chunk);
      dockerComposeContent += dockerComposeServiceTemplate(`${community.name} ${Math.round(i / chunk) + 1}`, temparray)
    }
    return dockerComposeContent;
  } else if ((validatedDNS !== undefined) && (validatedDNS.length >= 1)) {
    return dockerComposeServiceTemplate(community.name, validatedDNS)
  } else {
    return '';
  }
}

export async function main() {
  console.time('mapAllSettled')
  const mobsByCommunity = await getMobilizations()
  const results2 = await mapAllSettled(mobsByCommunity.data.communities, mapFnCheckIP, 1)
  const result3 = results2.filter((f:any) => f.value.mobilizations.filter((ff:any) => ff.value !== '').length > 0);

  console.timeEnd('mapAllSettled')
  console.log('------------')
  dockerComposeTemplate = dockerComposeTemplate + results2.map((c: any) => {
    return dockerComposeService(c.value, c.value.mobilizations);
  }).join('');
  console.log(dockerComposeTemplate);
}

import React from 'react';
import SelectField from '../../../components/SelectField';

const banks = [
  { code: "332", name: "Acesso Soluções de Pagamento S.A." },
  { code: "117", name: "ADVANCED CORRETORA DE CÂMBIO LTDA" },
  { code: "272", name: "AGK CORRETORA DE CAMBIO S.A." },
  { code: "349", name: "AMAGGI S.A. - CRÉDITO, FINANCIAMENTO E INVESTIMENTO" },
  { code: "188", name: "ATIVA INVESTIMENTOS S.A. CORRETORA DE TÍTULOS, CÂMBIO E VALORES" },
  { code: "280", name: "Avista S.A. Crédito, Financiamento e Investimento" },
  { code: "080", name: "B&T CORRETORA DE CAMBIO LTDA." },
  { code: "654", name: "BANCO A.J. RENNER S.A." },
  { code: "246", name: "Banco ABC Brasil S.A." },
  { code: "075", name: "Banco ABN Amro S.A." },
  { code: "121", name: "Banco Agibank S.A." },
  { code: "025", name: "Banco Alfa S.A. " },
  { code: "065", name: "Banco AndBank (Brasil) S.A. " },
  { code: "213", name: "Banco Arbi S.A. " },
  { code: "096", name: "Banco B3 S.A." },
  { code: "024", name: "Banco Bandepe S.A." },
  { code: "330", name: "BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A." },
  { code: "318", name: "Banco BMG S.A." },
  { code: "752", name: "Banco BNP Paribas Brasil S.A." },
  { code: "107", name: "Banco Bocom BBM S.A." },
  { code: "063", name: "Banco Bradescard S.A." },
  { code: "036", name: "Banco Bradesco BBI S.A. " },
  { code: "122", name: "Banco Bradesco BERJ S.A." },
  { code: "394", name: "Banco Bradesco Financiamentos S.A." },
  { code: "237", name: "Banco Bradesco S.A. " },
  { code: "218", name: "Banco BS2 S.A." },
  { code: "208", name: "Banco BTG Pactual S.A." },
  { code: "336", name: "Banco C6 S.A." },
  { code: "473", name: "Banco Caixa Geral - Brasil S.A." },
  { code: "412", name: "BANCO CAPITAL S.A." },
  { code: "040", name: "Banco Cargill S.A." },
  { code: "266", name: "BANCO CEDULA S.A." },
  { code: "739", name: "Banco Cetelem S.A." },
  { code: "233", name: "Banco Cifra S.A." },
  { code: "745", name: "Banco Citibank S.A. " },
  { code: "241", name: "BANCO CLASSICO S.A. " },
  { code: "756", name: "BANCO COOPERATIVO DO BRASIL S.A. - BANCOOB" },
  { code: "748", name: "BANCO COOPERATIVO SICREDI S.A. " },
  { code: "222", name: "BANCO CRÉDIT AGRICOLE BRASIL S.A." },
  { code: "505", name: "Banco Credit Suisse (Brasil) S.A." },
  { code: "069", name: "Banco Crefisa S.A." },
  { code: "003", name: "BANCO DA AMAZONIA S.A." },
  { code: "083", name: "Banco da China Brasil S.A." },
  { code: "707", name: "Banco Daycoval S.A. " },
  { code: "300", name: "Banco de la Nacion Argentina" },
  { code: "495", name: "Banco de La Provincia de Buenos Aires" },
  { code: "335", name: "Banco Digio S.A." },
  { code: "001", name: "Banco do Brasil S.A." },
  { code: "047", name: "Banco do Estado de Sergipe S.A." },
  { code: "037", name: "Banco do Estado do Pará S.A." },
  { code: "041", name: "Banco do Estado do Rio Grande do Sul S.A. " },
  { code: "004", name: "Banco do Nordeste do Brasil S.A." },
  { code: "265", name: "Banco Fator S.A." },
  { code: "224", name: "Banco Fibra S.A." },
  { code: "626", name: "BANCO FICSA S.A." },
  { code: "094", name: "Banco Finaxis S.A." },
  { code: "612", name: "Banco Guanabara S.A." },
  { code: "012", name: "Banco Inbursa S.A." },
  { code: "604", name: "Banco Industrial do Brasil S.A." },
  { code: "653", name: "BANCO INDUSVAL S.A. " },
  { code: "077", name: "Banco Inter S.A." },
  { code: "249", name: "Banco Investcred Unibanco S.A. " },
  { code: "184", name: "Banco Itaú BBA S.A. " },
  { code: "029", name: "Banco Itaú Consignado S.A." },
  { code: "479", name: "Banco ItauBank S.A. " },
  { code: "074", name: "Banco J. Safra S.A. " },
  { code: "376", name: "BANCO J.P. MORGAN S.A." },
  { code: "217", name: "Banco John Deere S.A." },
  { code: "076", name: "Banco KDB do Brasil S.A." },
  { code: "757", name: "BANCO KEB HANA DO BRASIL S.A." },
  { code: "600", name: "Banco Luso Brasileiro S.A." },
  { code: "243", name: "Banco Máxima S.A." },
  { code: "389", name: "Banco Mercantil do Brasil S.A. " },
  { code: "370", name: "Banco Mizuho do Brasil S.A. " },
  { code: "746", name: "Banco Modal S.A." },
  { code: "066", name: "BANCO MORGAN STANLEY S.A." },
  { code: "456", name: "Banco MUFG Brasil S.A." },
  { code: "007", name: "BANCO NACIONAL DE DESENVOLVIMENTO ECONOMICO E SOCIAL" },
  { code: "169", name: "Banco Olé Bonsucesso Consignado S.A." },
  { code: "079", name: "Banco Original do Agronegócio S.A." },
  { code: "212", name: "Banco Original S.A. " },
  { code: "712", name: "Banco Ourinvest S.A." },
  { code: "623", name: "Banco Pan S.A." },
  { code: "611", name: "Banco Paulista S.A. " },
  { code: "643", name: "Banco Pine S.A. " },
  { code: "747", name: "Banco Rabobank International Brasil S.A." },
  { code: "633", name: "Banco Rendimento S.A." },
  { code: "741", name: "BANCO RIBEIRAO PRETO S.A." },
  { code: "120", name: "BANCO RODOBENS S.A. " },
  { code: "422", name: "Banco Safra S.A." },
  { code: "033", name: "BANCO SANTANDER (BRASIL) S.A." },
  { code: "743", name: "Banco Semear S.A." },
  { code: "754", name: "Banco Sistema S.A." },
  { code: "630", name: "Banco Smartbank S.A." },
  { code: "366", name: "BANCO SOCIETE GENERALE BRASIL S.A." },
  { code: "637", name: "BANCO SOFISA S.A." },
  { code: "464", name: "Banco Sumitomo Mitsui Brasileiro S.A." },
  { code: "082", name: "BANCO TOPÁZIO S.A." },
  { code: "634", name: "BANCO TRIANGULO S.A." },
  { code: "018", name: "Banco Tricury S.A." },
  { code: "655", name: "Banco Votorantim S.A." },
  { code: "610", name: "Banco VR S.A." },
  { code: "119", name: "Banco Western Union do Brasil S.A." },
  { code: "124", name: "Banco Woori Bank do Brasil S.A." },
  { code: "348", name: "Banco XP S.A." },
  { code: "081", name: "BancoSeguro S.A." },
  { code: "021", name: "BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO" },
  { code: "755", name: "Bank of America Merrill Lynch Banco Múltiplo S.A." },
  { code: "268", name: "BARI COMPANHIA HIPOTECÁRIA" },
  { code: "250", name: "BCV - BANCO DE CRÉDITO E VAREJO S.A." },
  { code: "144", name: "BEXS BANCO DE CÂMBIO S/A" },
  { code: "253", name: "Bexs Corretora de Câmbio S/A" },
  { code: "134", name: "BGC LIQUIDEZ DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA " },
  { code: "017", name: "BNY Mellon Banco S.A." },
  { code: "301", name: "BPP Instituição de Pagamento S.A." },
  { code: "126", name: "BR Partners Banco de Investimento S.A." },
  { code: "070", name: "BRB - BANCO DE BRASILIA S.A." },
  { code: "092", name: "BRK S.A. Crédito, Financiamento e Investimento " },
  { code: "173", name: "BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A." },
  { code: "142", name: "Broker Brasil Corretora de Câmbio Ltda. " },
  { code: "292", name: "BS2 Distribuidora de Títulos e Valores Mobiliários S.A." },
  { code: "104", name: "CAIXA ECONOMICA FEDERAL " },
  { code: "309", name: "CAMBIONET CORRETORA DE CÂMBIO LTDA. " },
  { code: "288", name: "CAROL DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA." },
  { code: "130", name: "CARUANA S.A. - SOCIEDADE DE CRÉDITO, FINANCIAMENTO E INVESTIMENTO" },
  { code: "159", name: "Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor" },
  { code: "114", name: "Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP" },
  { code: "091", name: "CENTRAL DE COOPERATIVAS DE ECONOMIA E CRÉDITO MÚTUO DO ESTADO DO RIO GRANDE DO S" },
  { code: "320", name: "China Construction Bank (Brasil) Banco Múltiplo S/A" },
  { code: "477", name: "Citibank N.A." },
  { code: "180", name: "CM CAPITAL MARKETS CORRETORA DE CÂMBIO, TÍTULOS E VALORES MOBILIÁRIOS LTDA" },
  { code: "127", name: "Codepe Corretora de Valores e Câmbio S.A. " },
  { code: "163", name: "Commerzbank Brasil S.A. - Banco Múltiplo" },
  { code: "133", name: "CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS DE CRÉDITO E ECONOMIA FAMILIAR E" },
  { code: "136", name: "CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS UNICRED LTDA. - UNICRED DO BRASI" },
  { code: "060", name: "Confidence Corretora de Câmbio S.A. " },
  { code: "085", name: "Cooperativa Central de Crédito - Ailos" },
  { code: "016", name: "COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI" },
  { code: "281", name: "Cooperativa de Crédito Rural Coopavel" },
  { code: "322", name: "Cooperativa de Crédito Rural de Abelardo Luz - Sulcredi/Crediluz " },
  { code: "286", name: "COOPERATIVA DE CRÉDITO RURAL DE OUROSULCREDI/OURO" },
  { code: "279", name: "COOPERATIVA DE CREDITO RURAL DE PRIMAVERA DO LESTE" },
  { code: "273", name: "Cooperativa de Crédito Rural de São Miguel do Oeste - Sulcredi/São Miguel" },
  { code: "098", name: "Credialiança Cooperativa de Crédito Rural " },
  { code: "010", name: "CREDICOAMO CREDITO RURAL COOPERATIVA" },
  { code: "089", name: "CREDISAN COOPERATIVA DE CRÉDITO" },
  { code: "097", name: "Credisis - Central de Cooperativas de Crédito Ltda." },
  { code: "011", name: "CREDIT SUISSE HEDGING-GRIFFO CORRETORA DE VALORES S.A " },
  { code: "342", name: "Creditas Sociedade de Crédito Direto S.A. " },
  { code: "321", name: "CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LT" },
  { code: "289", name: "DECYSEO CORRETORA DE CAMBIO LTDA." },
  { code: "487", name: "DEUTSCHE BANK S.A. - BANCO ALEMAO" },
  { code: "140", name: "Easynvest - Título Corretora de Valores SA" },
  { code: "149", name: "Facta Financeira S.A. - Crédito Financiamento e Investimento" },
  { code: "196", name: "FAIR CORRETORA DE CAMBIO S.A." },
  { code: "343", name: "FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA." },
  { code: "331", name: "Fram Capital Distribuidora de Títulos e Valores Mobiliários S.A. " },
  { code: "285", name: "Frente Corretora de Câmbio Ltda." },
  { code: "278", name: "Genial Investimentos Corretora de Valores Mobiliários S.A." },
  { code: "364", name: "GERENCIANET PAGAMENTOS DO BRASIL LTDA" },
  { code: "138", name: "Get Money Corretora de Câmbio S.A." },
  { code: "064", name: "GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A." },
  { code: "177", name: "Guide Investimentos S.A. Corretora de Valores" },
  { code: "146", name: "GUITTA CORRETORA DE CAMBIO LTDA." },
  { code: "078", name: "Haitong Banco de Investimento do Brasil S.A." },
  { code: "062", name: "Hipercard Banco Múltiplo S.A." },
  { code: "189", name: "HS FINANCEIRA S/A CREDITO, FINANCIAMENTO E INVESTIMENTOS" },
  { code: "269", name: "HSBC BRASIL S.A. - BANCO DE INVESTIMENTO" },
  { code: "271", name: "IB Corretora de Câmbio, Títulos e Valores Mobiliários S.A." },
  { code: "157", name: "ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda." },
  { code: "132", name: "ICBC do Brasil Banco Múltiplo S.A." },
  { code: "492", name: "ING Bank N.V." },
  { code: "139", name: "Intesa Sanpaolo Brasil S.A. - Banco Múltiplo" },
  { code: "652", name: "Itaú Unibanco Holding S.A." },
  { code: "341", name: "ITAÚ UNIBANCO S.A." },
  { code: "488", name: "JPMorgan Chase Bank, National Association " },
  { code: "399", name: "Kirton Bank S.A. - Banco Múltiplo" },
  { code: "293", name: "Lastro RDV Distribuidora de Títulos e Valores Mobiliários Ltda." },
  { code: "105", name: "Lecca Crédito, Financiamento e Investimento S/A" },
  { code: "145", name: "LEVYCAM - CORRETORA DE CAMBIO E VALORES LTDA." },
  { code: "113", name: "Magliano S.A. Corretora de Cambio e Valores Mobiliarios" },
  { code: "323", name: "MERCADOPAGO.COM REPRESENTACOES LTDA." },
  { code: "274", name: "MONEY PLUS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORT" },
  { code: "259", name: "MONEYCORP BANCO DE CÂMBIO S.A. " },
  { code: "128", name: "MS Bank S.A. Banco de Câmbio" },
  { code: "354", name: "NECTON INVESTIMENTOSS.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES" },
  { code: "191", name: "Nova Futura Corretora de Títulos e Valores Mobiliários Ltda." },
  { code: "753", name: "Novo Banco Continental S.A. - Banco Múltiplo" },
  { code: "260", name: "Nu Pagamentos S.A." },
  { code: "111", name: "OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIARIOS S.A." },
  { code: "319", name: "OM DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA" },
  { code: "613", name: "Omni Banco S.A. " },
  { code: "325", name: "Órama Distribuidora de Títulos e Valores Mobiliários S.A. " },
  { code: "355", name: "ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A." },
  { code: "290", name: "Pagseguro Internet S.A. " },
  { code: "254", name: "PARANÁ BANCO S.A." },
  { code: "326", name: "PARATI - CREDITO, FINANCIAMENTO E INVESTIMENTO S.A." },
  { code: "194", name: "PARMETAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA" },
  { code: "174", name: "PERNAMBUCANAS FINANCIADORA S.A. - CRÉDITO, FINANCIAMENTO E INVESTIMENTO" },
  { code: "315", name: "PI Distribuidora de Títulos e Valores Mobiliários S.A." },
  { code: "100", name: "Planner Corretora de Valores S.A." },
  { code: "125", name: "Plural S.A. Banco Múltiplo" },
  { code: "093", name: "PÓLOCREDSOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORT" },
  { code: "108", name: "PORTOCRED S.A. - CREDITO, FINANCIAMENTO E INVESTIMENTO" },
  { code: "306", name: "PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA." },
  { code: "329", name: "QI Sociedade de Crédito Direto S.A. " },
  { code: "283", name: "RB CAPITAL INVESTIMENTOS DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LIMITADA" },
  { code: "101", name: "RENASCENCA DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA" },
  { code: "270", name: "Sagitur Corretora de Câmbio Ltda." },
  { code: "751", name: "Scotiabank Brasil S.A. Banco Múltiplo" },
  { code: "276", name: "Senff S.A. - Crédito, Financiamento e Investimento" },
  { code: "545", name: "SENSO CORRETORA DE CAMBIO E VALORES MOBILIARIOS S.A" },
  { code: "190", name: "SERVICOOP - COOPERATIVA DE CRÉDITO DOS SERVIDORES PÚBLICOS ESTADUAIS DO RIO GRAN" },
  { code: "183", name: "SOCRED S.A. - SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO P" },
  { code: "365", name: "SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIARIOS" },
  { code: "299", name: "SOROCREDCRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A. " },
  { code: "014", name: "STATE STREET BRASIL S.A. - BANCO COMERCIAL" },
  { code: "197", name: "Stone Pagamentos S.A." },
  { code: "340", name: "Super Pagamentos e Administração de Meios Eletrônicos S.A." },
  { code: "307", name: "Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda." },
  { code: "352", name: "TORO CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA" },
  { code: "095", name: "Travelex Banco de Câmbio S.A." },
  { code: "143", name: "Treviso Corretora de Câmbio S.A." },
  { code: "131", name: "TULLETT PREBON BRASIL CORRETORA DE VALORES E CÂMBIO LTDA" },
  { code: "129", name: "UBS Brasil Banco de Investimento S.A." },
  { code: "015", name: "UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A." },
  { code: "099", name: "UNIPRIME CENTRAL - CENTRAL INTERESTADUAL DE COOPERATIVAS DE CREDITO LTDA." },
  { code: "084", name: "UNIPRIME NORTE DO PARANÁ - COOPERATIVA DE CRÉDITO LTDA" },
  { code: "373", name: "UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A." },
  { code: "298", name: "Vip's Corretora de Câmbio Ltda." },
  { code: "296", name: "VISION S.A. CORRETORA DE CAMBIO" },
  { code: "367", name: "VITREO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A." },
  { code: "310", name: "VORTX DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA." },
  { code: "102", name: "XP INVESTIMENTOS CORRETORA DE CÂMBIO" }
]
  .filter((b: any) => !isNaN(b.code) && b.code.length === 3)
  .sort((b1: any, b2: any) => Number(b1.code) - Number(b2.code))
;

const BankField = ({ emptyText, ...props }: any) => (
  <SelectField
    {...props}
  >
    {emptyText && (<option value="">{emptyText}</option>)}
    {banks.map((b: any, i: number) => (
      <option key={i} value={b.code}>{`${b.code} - ${b.name}`}</option>
    ))}
  </SelectField>
);

export default BankField;
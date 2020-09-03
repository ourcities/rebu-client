import { MatchesData, Groups } from "../types";

export const getSelectValues = (values: {
  [x: string]: { value: unknown; label: string } & string;
}): {
  [x: string]: string | number;
} =>
  Object.keys(values).reduce((newObj, old) => {
    const newValue =
      typeof values[old] === "object" && values[old] !== null
        ? values[old].value
        : values[old];
    return {
      ...newObj,
      [old]: newValue,
    };
  }, {});

export const getStates = (): Array<{ label: string; value?: string }> => [
  { label: "AC", value: "ac" },
  { label: "AL", value: "al" },
  { label: "AP", value: "ap" },
  { label: "AM", value: "am" },
  { label: "BA", value: "ba" },
  { label: "CE", value: "ce" },
  { label: "DF", value: "df" },
  { label: "ES", value: "es" },
  { label: "GO", value: "go" },
  { label: "MA", value: "ma" },
  { label: "MT", value: "mt" },
  { label: "MS", value: "ms" },
  { label: "MG", value: "mg" },
  { label: "PA", value: "pa" },
  { label: "PB", value: "pb" },
  { label: "PR", value: "pr" },
  { label: "PE", value: "pe" },
  { label: "PI", value: "pi" },
  { label: "RJ", value: "rj" },
  { label: "RN", value: "rn" },
  { label: "RS", value: "rs" },
  { label: "RO", value: "ro" },
  { label: "RR", value: "rr" },
  { label: "SC", value: "sc" },
  { label: "SP", value: "sp" },
  { label: "SE", value: "se" },
  { label: "TO", value: "to" },
];

export const createWhatsappLink = (
  number: string,
  textVariables: string
): string | undefined => {
  if (!number) return undefined;
  return `https://web.whatsapp.com/send?phone=55${number}&text=${textVariables}`;
};

type TicketsWithUsers = Array<{
  recipient: {
    name?: string;
    whatsapp?: string | null;
    state?: string;
    phone?: string | null;
    organization_id?: number;
    user_id?: number;
    ticketId: number;
  };
  volunteer: {
    name?: string;
    whatsapp?: string | null;
    state?: string;
    phone?: string | null;
    organization_id?: number;
    user_id?: number;
    ticketId: number;
  };
  createdAt: string;
}>;

export const fuseTicketsWithUsers = (
  tickets: Array<{
    volunteersUserId: number;
    individualsUserId: number;
    individualsTicketId: number;
    volunteersTicketId: number;
    created_at: string;
  }>,
  users: Array<{
    name: string;
    whatsapp: string;
    state: string;
    phone: string;
    organization_id: number;
    user_id: number;
  }>
): TicketsWithUsers => {
  return tickets.map((ticket) => {
    return {
      recipient: {
        ...users.find((user) => user.user_id === ticket.individualsUserId),
        ticketId: ticket.individualsTicketId,
      },
      volunteer: {
        ...users.find((user) => user.user_id === ticket.volunteersUserId),
        ticketId: ticket.volunteersTicketId,
      },
      createdAt: ticket.created_at,
    };
  });
};

type Organizations = {
  lawyer: number;
  therapist: number;
  individual: number;
};

const parseZendeskOrganizations = (input?: string) => JSON.parse(input || "");
export const zendeskOrganizations: Organizations = parseZendeskOrganizations(
  process.env.REACT_APP_ZENDESK_ORGANIZATIONS
);

export const getAgentZendeskUserId = (
  id?: number | null
): number | undefined => {
  switch (id) {
    case 281: //"Larissa"
      return 377510044432;
    case 346: //"Ana",
      return 377577169651;
    case 339: //"Gabriela",
      return 377511446392;
    case null:
    case undefined:
      return undefined;
    default:
      // "Voluntária"
      return 373018450472;
  }
};

export const getAgentFromZendeskUserId: Record<number, string> = {
  377510044432: "Larissa",
  377577169651: "Ana",
  377511446392: "Gabriela",
  373018450472: "Voluntária",
};

export const groupsToSelect = (
  groups: Groups
): Array<{ label: string; value: number }> => {
  return groups.map((group) => ({
    label: group.name,
    value: group.id,
  }));
};

export const deconstructAgent = (
  data?: MatchesData
): MatchesData | Record<string, unknown> => {
  if (!data) return {};
  return {
    ...data,
    relationships: data.relationships.map((i: any) => ({
      ...i,
      agent: i.recipientTicket.agentId,
    })),
  };
};

export const groupToOrganization: Record<number, number> = {
  7: zendeskOrganizations["therapist"],
  8: zendeskOrganizations["lawyer"],
  9: zendeskOrganizations["individual"],
};

export const MAPA_DO_ACOLHIMENTO_COMMUNITY = 40;
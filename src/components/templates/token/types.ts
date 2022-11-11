import { Errors } from "utils/Errors";

type TToken = {
  logo: string;
  name: string;
  symbol: string;
  chain: string;
  addr: string;
  launch: string;
  audited: boolean;
  votes: number;
};
export interface IToken {
  token?: TToken;
  error?: Errors;
}

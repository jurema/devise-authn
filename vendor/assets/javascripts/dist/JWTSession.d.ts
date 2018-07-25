import { Session, JWTClaims } from "./types";
export default class JWTSession implements Session {
    readonly token: string;
    readonly claims: JWTClaims;
    constructor(token: string);
    iat(): number;
    exp(): number;
    halflife(): number;
}

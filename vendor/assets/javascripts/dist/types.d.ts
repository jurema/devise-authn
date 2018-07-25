export interface Credentials {
    [index: string]: string;
    username: string;
    password: string;
}
export interface KeratinError {
    field?: string;
    message: string;
}
export interface JWTClaims {
    iss: string;
    aud: string;
    sub: number;
    iat: number;
    exp: number;
}
export declare class Session {
    readonly token: string;
    readonly claims: JWTClaims;
    constructor(token: string);
    iat(): number;
    exp(): number;
    halflife(): number;
}
export interface SessionStore {
    read(): string | undefined;
    update(val: string): void;
    delete(): void;
}
export interface StringMap {
    [index: string]: string | undefined;
}

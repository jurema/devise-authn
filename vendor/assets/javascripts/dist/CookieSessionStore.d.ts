import { SessionStore } from "./types";
export default class CookieSessionStore implements SessionStore {
    private readonly sessionName;
    private readonly secureFlag;
    private readonly sessionPath;
    constructor(cookieName: string, path: string);
    read(): string | undefined;
    update(val: string): void;
    delete(): void;
}

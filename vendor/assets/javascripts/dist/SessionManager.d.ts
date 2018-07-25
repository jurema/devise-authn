/// <reference types="es6-promise" />
import { SessionStore } from "./types";
export default class SessionManager {
    private store;
    private refreshAt;
    private timeoutID;
    constructor();
    setStore(store: SessionStore): void;
    sessionToken(): string | undefined;
    update(id_token: string): void;
    endSession(): void;
    restoreSession(): Promise<void>;
    refresh(): Promise<void>;
    private scheduleRefresh();
}

import { SessionStore } from "./types";
export declare function localStorageSupported(): boolean;
export default class LocalStorageSessionStore implements SessionStore {
    private readonly sessionName;
    constructor(name: string);
    read(): string | undefined;
    update(val: string): void;
    delete(): void;
}

import { SessionStore } from "./types";
export default class MemorySessionStore implements SessionStore {
    private session;
    read(): string | undefined;
    update(val: string): void;
    delete(): void;
}

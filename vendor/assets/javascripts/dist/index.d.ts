/// <reference types="es6-promise" />
import { Credentials } from './types';
export declare function restoreSession(): Promise<void>;
export declare function importSession(): Promise<void>;
export declare function setCookieStore(sessionName: string, path: string): void;
export declare function setLocalStorageStore(sessionName: string): void;
export declare function session(): string | undefined;
export declare function signup(credentials: Credentials): Promise<void>;
export declare function login(credentials: Credentials): Promise<void>;
export declare function logout(): Promise<void>;
export declare function changePassword(args: {
    password: string;
    currentPassword: string;
}): Promise<void>;
export declare function resetPassword(args: {
    password: string;
    token: string;
}): Promise<void>;
export { setHost, isAvailable, requestPasswordReset } from "./api";

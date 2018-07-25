/// <reference types="es6-promise" />
import { Credentials } from './types';
export declare function setHost(URL: string): void;
export declare function signup(credentials: Credentials): Promise<string>;
export declare function isAvailable(username: string): Promise<boolean>;
export declare function refresh(): Promise<string>;
export declare function login(credentials: Credentials): Promise<string>;
export declare function logout(): Promise<void>;
export declare function requestPasswordReset(username: string): Promise<{}>;
export declare function changePassword(args: {
    password: string;
    currentPassword: string;
}): Promise<string>;
export declare function resetPassword(args: {
    password: string;
    token: string;
}): Promise<string>;

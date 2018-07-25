/// <reference types="es6-promise" />
import { StringMap } from "./types";
export declare function get<T>(url: string, data: StringMap): Promise<T>;
export declare function del<T>(url: string): Promise<T>;
export declare function post<T>(url: string, data: StringMap): Promise<T>;

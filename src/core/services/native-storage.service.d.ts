import { IStorageService } from './storage.interface.ts';
export declare class NativeStorageService implements IStorageService {
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string | null>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
}
//# sourceMappingURL=native-storage.service.d.ts.map
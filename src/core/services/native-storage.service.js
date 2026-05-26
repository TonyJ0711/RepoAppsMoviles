import { Preferences } from '@capacitor/preferences';
import { IStorageService } from './storage.interface';
export class NativeStorageService {
    async set(key, value) {
        try {
            await Preferences.set({ key, value });
        }
        catch (error) {
            console.error('Error en el puente nativo al guardar:', error);
            throw error;
        }
    }
    async get(key) {
        try {
            const { value } = await Preferences.get({ key });
            return value;
        }
        catch (error) {
            console.error('Error en el puente nativo al leer:', error);
            return null;
        }
    }
    async remove(key) {
        await Preferences.remove({ key });
    }
    async clear() {
        try {
            await Preferences.clear();
        }
        catch (error) {
            console.error('Error en el puente nativo al limpiar todo:', error);
        }
    }
}
//# sourceMappingURL=native-storage.service.js.map
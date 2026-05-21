import { Preferences } from '@capacitor/preferences';
import { IStorageService } from './storage.interface';
 
export class NativeStorageService implements IStorageService {
  async set(key: string, value: string): Promise<void> {
    try {
      await Preferences.set({ key, value });
    } catch (error) {
      console.error('Error en el puente nativo al guardar:', error);
      throw error;
    }
  }
 
  async get(key: string): Promise<string | null> {
    try {
      const { value } = await Preferences.get({ key });
      return value;
    } catch (error) {
      console.error('Error en el puente nativo al leer:', error);
      return null;
    }
  }
 
  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  async clear(): Promise<void> {
    try {
      await Preferences.clear();
    } catch (error) {
      console.error('Error en el puente nativo al limpiar todo:', error);
    }
  }
}
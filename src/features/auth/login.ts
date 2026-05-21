import { NativeStorageService } from '../../core/services/native-storage.service';
 
const storage = new NativeStorageService();
 
export async function checkUserSession() {
  const token = await storage.get('auth_token');
  
  if (token) {
    console.log('Usuario autenticado, redirigiendo...');
  } else {
    console.log('Sesión limpia. Mostrar Login.');
  }
}
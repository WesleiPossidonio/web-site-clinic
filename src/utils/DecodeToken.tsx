
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  id: string;  
  name: string; 
  number_register: string;
  email: string;
  position: string;
  admin: string;
  iat: number;  // Data de emissão
  exp: number;  // Data de expiração
}

export const decodeToken = (token: string | null): JwtPayload | null => {
  if (!token) return null;

  try {
    const decodedToken = jwtDecode<JwtPayload>(token);
    console.log(decodedToken)
    return decodedToken;
  } catch (error) {
    console.error('Erro ao decodificar o token', error);
    return null;
  }
};

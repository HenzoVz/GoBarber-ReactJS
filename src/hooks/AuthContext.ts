import { createContext } from 'react';

interface AuthContextData {
  name: string;
  // token: string;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

export default authContext;

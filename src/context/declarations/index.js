import { createContext, useContext } from "react";

export const AuthContext = createContext();
export const UsersContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const useUsersContext = () => useContext(UsersContext);

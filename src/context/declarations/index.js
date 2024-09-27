import { createContext, useContext } from "react";

export const AuthContext = createContext();
export const UsersContext = createContext();
export const InterestsPlacesContext = createContext();
export const UsersLoginsContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const useUsersContext = () => useContext(UsersContext);
export const useInterestsPlacesContext = () =>
  useContext(InterestsPlacesContext);
export const useUsersLoginsContext = () => useContext(UsersLoginsContext);

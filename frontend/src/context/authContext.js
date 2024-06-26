import React, { createContext, useState , } from 'react';
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser] = useState()

  const isLog = (credentials) =>{
    setIsAuthenticated(true)
    setUser(credentials)
  }
  
  const login = (token) => {
    // Stocker le JWT dans le local storage ou le cookie
    // Set isAuthenticated à true
    localStorage.setItem('tokTraiteur', token);
    setIsAuthenticated(true)
    const decoded = jwtDecode(token);
    setUser(decoded.credentials)
  };

  const logout = () => {
    // Supprimer le JWT du local storage ou du cookie
    // Set isAuthenticated à false
    localStorage.setItem('tokTraiteur', "");
    setIsAuthenticated(false)
    setUser()
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

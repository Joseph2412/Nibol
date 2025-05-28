import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    
    const storedEmail = localStorage.getItem("email");
    const isLogged = localStorage.getItem("isLogged") === "true";
    
    if (isLogged && storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const login = (email) => {
    setUserEmail(email);
    localStorage.setItem("email", email);
    localStorage.setItem("isLogged", "true");
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("email");
    localStorage.removeItem("isLogged");
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

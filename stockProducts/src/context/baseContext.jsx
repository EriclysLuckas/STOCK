import { createContext, useState, useEffect } from "react";
import Utils from "../hooks/Utils";

export const BaseContext = createContext();

// eslint-disable-next-line react/prop-types
export const BaseProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // sincroniza caso o token no localStorage mude
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
  };

  const utils = Utils();

  return (
    <BaseContext.Provider
      value={{
        ...utils,
        token,
        setToken,
        handleLogout,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

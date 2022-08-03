import React, { useState } from "react";
//creating the context 
export const AuthContext = React.createContext();

//Provider
const AuthProvider = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

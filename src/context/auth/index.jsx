import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../declarations";

const AuthProvider = ({ children }) => {
  const [authCheck, setAuthCheck] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  // Create the auth context value
  const authContextValue = {
    authCheck,
    logged,
    user,

    setAuthCheck,
    setLogged,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

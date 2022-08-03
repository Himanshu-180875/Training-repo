import React, { useState } from "react";
//creating the context 
export const PlainTextContext = React.createContext();

//Provider
const PlainTextProvider = (props) => {
  const [decryptedData, setDecryptedData] = useState("");
  const decryption = (data) => {
    setDecryptedData(data);
  };
  return (
    <PlainTextContext.Provider value={{ decryptedData, decryption }}>
      {props.children}
    </PlainTextContext.Provider>
  );
};

export default PlainTextProvider;

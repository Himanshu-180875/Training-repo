import React, { useState } from "react";
//creating the context 
export const ViewModalContext = React.createContext();

// Provider
const ViewModalProvider = (props) => {
  const [viewModal, setViewModal] = useState(false);

  return (
    <ViewModalContext.Provider value={{ viewModal, setViewModal }}>
      {props.children}
    </ViewModalContext.Provider>
  );
};

export default ViewModalProvider;

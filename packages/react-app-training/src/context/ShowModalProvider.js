import React, { useState } from "react";
//creating the context 
export const ShowModalContext = React.createContext();

//Provider
const ShowModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ShowModalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </ShowModalContext.Provider>
  );
};

export default ShowModalProvider;

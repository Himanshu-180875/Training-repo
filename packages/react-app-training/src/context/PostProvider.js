import React, { useState } from "react";
//creating the context 
export const PostContext = React.createContext();

//Provider
const PostProvider = (props) => {
  const [updatePost, isPostUpdated] = useState(false);
  const setPostUpdate = () => {
    isPostUpdated(!updatePost);
  };
  return (
    <PostContext.Provider value={{ updatePost, setPostUpdate }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;

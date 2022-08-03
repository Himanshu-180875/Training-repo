import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import Nav from "../components/Navbar";
import Cards from "../components/Cards";
import { PostContext } from "../context/PostProvider";

export default function UserData() {
  const [initialUserData, setUserData] = useState([]);
  const { updatePost } = useContext(PostContext);

  const navigate = useNavigate();
  const getPosts = () => {
    axios
      .get("/posts/")
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((err) => {
        navigate("/");
      });
  };
  useEffect(() => {
    getPosts();
  }, [updatePost]);
  //All data page of user which consists of Navbar and content

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen h-full">
      <Nav />
      <Cards Userdata={initialUserData} />
    </div>
  );
}

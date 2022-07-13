import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import axios from "../components/axios";
import { toast } from 'react-toastify';
import Nav from '../components/Navbar';
import Cards from "../components/Cards";


export default function UserData(){
    const [initialUserData, setUserData] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    const getPosts = () => {

        axios.get("/posts/").then((response) => {
            setUserData(response.data.data)
            
    }  
    
     )
     .catch(err => {
        navigate('/')
     })
       
    }
useEffect(()=>{
    getPosts()
},[])
//All data page of user which consists of Navbar and content

    return(
        <div>
            <Nav/>
            
            <Cards Userdata={initialUserData}/>

        </div>
    )
}
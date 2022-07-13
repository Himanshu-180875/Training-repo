import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "./formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { toast } from 'react-toastify';
import axios from './axios';
// import axios from 'axios';



const fields=loginFields;
let fieldsState = {};
//setting the key name with field name and value = ''
fields.forEach(field=>fieldsState[field.name]='');

export default function Login(){
    const navigate = useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);
    //for setting the value entered by user
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.name]:e.target.value})
    }

    //for submitting the value to db
    const handleSubmit=(e)=>{
        e.preventDefault();
        AuthenticateUser(loginState);
    }

    //function for calling api
    const AuthenticateUser = (newState) => {
        axios.post("/users/login",newState).then((response) => {
        
                toast.success(response.data.message)
                navigate('/posts')
            
        }
         )
         .catch(err => {
            toast.error(err.response.data.message)
         })
    }

   

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.name]}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}
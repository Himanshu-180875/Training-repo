import { useState } from 'react';
import { signupFields } from "./formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "./axios";
import { toast } from 'react-toastify';

const fields=signupFields;
let fieldsState={};

// for creating the object with key name = name of field and value = empty
fields.forEach(field => fieldsState[field.name]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  //for setting the value of state with entered value
  const handleChange=(e)=>setSignupState({...signupState,[e.target.name]:e.target.value});

  //for submitting the value to db 
  const handleSubmit=(e)=>{
    e.preventDefault();
    createAccount(signupState)
  }

  //handle Signup API Integration here
  const createAccount=(newState)=>{
    axios.post("/users/register", newState).then(reponse=>
      toast.success(reponse.data.message),
      setSignupState(fieldsState)
      )
    .catch(err => toast.error(err.response?.data?.message))

  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.name]}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}
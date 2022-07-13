import React, { useState} from 'react'
import axios from './axios';
import { toast } from 'react-toastify';
import moment from 'moment';

export default function Cards({Userdata}) {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('')
  const [titleGot, setTitleGot] = useState('')
  const [messageGot, setMessageGot] = useState('')
  const [decryptedData, setDecryptedData] = useState('')
  const [authenticated, setAuthenticated] = useState(false);
  const [postId, setID] = useState()

  //It will render the decrypted text on screen
  const showText = (originalData) => {
    setDecryptedData(originalData.data)
    setAuthenticated(!authenticated)
    toast.success(originalData.message)
  }
  //it will set the state or current value of password
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  //it will open the modal and show values like title on modal
  const openModal = (message, title, id)=>{
    setAuthenticated(false)
    setTitleGot(title)
    setMessageGot(message)
    setShowModal(!showModal)
    setID(id)
  }

  //This is used for fetching the decrypted message from backend with the help of  password
  const getDecryptedData  = async() => {
    const object = {'password':password, 'message':messageGot}
    axios.post("/posts/view", object)
    .then(response => showText(response.data))
    .catch(err=> toast.error(err.response.data.message))
    setShowModal(!showModal)
   }
  
  
  
  return (
    <>
    <div class="container my-12 mx-auto px-4 md:px-12">

    

    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {/* {This is used for making number of cards based on the length of messages} */}
    {Userdata.map(field => {
      
      return(

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-2xl leading-tight font-medium mb-2 font-bold">{field.title}</h5>
    {/* {here this one is checking whether user is authenticated then only will display the decrypted text} */}
    {
      authenticated && field.id === postId ?
    <p class='text-gray-600 text-lg text-base mb-4 font-bold'>
      {decryptedData}
    </p>
      :
    <p class='text-gray-600 text-lg text-base mb-4 font-bold'>**************</p>

    }

    <button type="button"
    onClick={() => openModal(field?.message, field?.title, field?.id)}
    
    class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">View</button>
    <p class="float-right m-2 text-sm">{moment.utc(field.createdOn).local().format('MMMM Do YYYY')}

    </p>
  </div>
</div>
 )  
        
})

}
    </div>
     
</div>
{/* {code for modal} */}
{showModal ? 
      
  <>
  <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="relative w-auto my-6 mx-auto max-w-3xl">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
          <h3 className="text-2xl font-semibold">
           {titleGot}
          </h3>
          <button
            className="p-0 ml-auto bg-white border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(!showModal)}
          >
            <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          
          <div class="px-2 pb-3">
          <div class="w-full mb-2">

</div>
          

<div class="w-full mb-2">
<div class="flex justify-center">
<input
  type="password"
  placeholder="Password"
  class="px-8 w-full border border-slate-400 rounded py-4 text-gray-900 focus:outline-none placeholder-gray-600"
  onChange={handlePassword}
/>
</div>
</div>
</div>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(!showModal)}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => getDecryptedData()}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>



: null} 
</>
)
}
   
  


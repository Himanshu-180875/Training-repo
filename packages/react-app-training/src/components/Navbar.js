import React, { useState} from "react";
import {Link,useNavigate} from 'react-router-dom';

import { Transition } from "@headlessui/react";
import axios from "./axios";
import { toast } from 'react-toastify';


function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')

  //for setting the value of message
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  //for setting the value of password
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  //for setting the value of title
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  //for sending the request to db for creating the message
  const createMessage = () => {
    const object = {'message':message, 'password':password, 'title':title}
    axios.post("/posts/create", object).then(response => toast.success(response.data.message))
    .catch(err=> toast.error(err))
    setShowModal(!showModal)
  }
  //For logout operation
  const logout = () => {
    axios.post("/users/logout").then((response) => {
      toast.success(response.data.message)
      navigate('/')
    })
    .catch(err => {
      toast.error(err.response.data.message)
   })
  }



  return (
    <>
    {/* { navabar start} */}
    <div>
      {/* {navigation links} */}
      <nav className="bg-blue-900">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center mr-auto">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/posts/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  All Messages
 
                 </Link>

                  <a
                    // href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setShowModal(true)}
                  >
                  Create Message
                  </a>
                </div>
              </div>
              
              
            </div>
            <div className="ml-auto hidden md:block">
              <a
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => logout()}

                  >
                    Logout 
                 </a>
              </div>
            {/* {for showing the menu icon and closing the menu icon} */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* {menu icons } */}
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        
          {/* {Mobile Navigation} */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          
            <div className="md:hidden" id="mobile-menu">
              <div  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/posts"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  All Messages
                </Link>

                <a
                  // href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setShowModal(true)}
                >
                  Create Message
                </a>
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => logout()}

                >
                  Logout
                </a>
              </div>
            </div>
          
        </Transition>
      </nav>
    </div>


    {/*  Code for Modal}   */}
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
                  Create Message
                </h3>
                <button
                  className="p-1 ml-auto bg-white border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
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
    <div class="flex justify-center">
    <input
        type="text"
        placeholder="Title"
        class="px-8 w-full border border-slate-400 rounded py-4 text-gray-900 focus:outline-none items-center placeholder-gray-600"
        onChange={handleTitle}
      />           
      
    </div>
    </div>
                
    <div class="w-full mb-2">
    <div class="flex justify-center">
    
      <input
        type="text"
        placeholder="Message"
        class="px-8 w-full border border-slate-400 rounded py-4 text-gray-900 focus:outline-none items-center placeholder-gray-600"
        onChange={handleMessage}
      />
    </div>
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
                  onClick={() => createMessage()}
                >
                  Save Changes
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

export default Nav;
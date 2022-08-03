import React, { useState, useContext } from "react";
import moment from "moment";
import { useTranslation } from 'react-i18next'
import getDecryptedData from "../config/GetplainTextAction";
import { viewMessage } from "./FormFields";
import Modal from "./Modal";
import Calendar from "../icons/Calendar";
import { Message } from "../icons/Message";
import { AuthContext } from "../context/AuthProvider";
import { PlainTextContext } from "../context/PlainTextProvider";
import { ViewModalContext } from "../context/ViewModalProvider";

export default function Cards({ Userdata }) {
  const {t} = useTranslation()

  //IsAuthenticated is checking whether the user has provided the correct password
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);

  //if the password is correct then only this function will set the value the decrypted value
  const { decryptedData } = useContext(PlainTextContext);

  //this is used for managing the state of the modal whether the modal has opened or not
  const { viewModal, setViewModal } = useContext(ViewModalContext);

  const [titleGot, setTitleGot] = useState("");
  const [messageGot, setMessageGot] = useState("");
  const [postId, setID] = useState();

  //it will open the modal and show values like title on modal
  const openModal = (message, title, id) => {
    setAuthenticated(false);
    setTitleGot(title);
    setMessageGot(message);
    setViewModal(!viewModal);
    setID(id);
  };
  return (
    <>
      <div className="container py-12 mx-auto px-4 md:px-12 ">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* {This is used for making number of cards based on the length of messages} */}
          {Userdata.map((field, i) => {
            return (
              <div
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                key={i}
              >
                <div className="block p-6 rounded-lg shadow-lg dark:shadow-md dark:shadow-gray-500 bg-white dark:bg-zinc-700">
                  <h5 className="text-gray-900 text-2xl leading-tight font-medium mb-2 font-bold dark:text-gray-200">
                    {field.title}
                  </h5>
                  {/* {here this one is checking whether user is authenticated then only will display the decrypted text} */}
                  {isAuthenticated && field.id === postId ? (
                    <p className="text-gray-600 text-lg text-base mb-4 font-bold dark:text-gray-300 flex">
                      <span className="mr-1 pt-1"><Message/></span>
                      {decryptedData}
                    </p>
                  ) : (
                    <p className="text-gray-600 text-lg text-base mb-4 font-bold dark:text-gray-300 flex">
                      <span className="mr-1"><Message/></span>
                      **************
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      openModal(field?.message, field?.title, field?.id)
                    }
                    className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {t('View')}
                  </button>
                  {/* As we are getting the time in utc format from db to converting to local time */}
                  <div className="float-right m-2 text-xs dark:text-gray-300">
                    <p className="flex">
                      <p className="-m-1 pr-3">
                        <Calendar/>
                      </p>
                    {moment.utc(field.createdOn).local().format("MMMM Do YYYY")}
                    
                     </p>
                  </div>
                </div>
              </div>
            );
          }).reverse()}
        </div>
      </div>
      {/* {code for modal ********** if user clicks on view button then only we will show the modal} */}
      {viewModal ? (
        <Modal
          titleGot={titleGot}
          messageGot={messageGot}
          inputFields={viewMessage}
          action={getDecryptedData}
          method="view"
        />
      ) : null}
    </>
  );
}

import React, { useState, useContext } from "react";
import ModalInput from "./ModalInput";
import ModalHeader from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import { PostContext } from "../context/PostProvider";
import { AuthContext } from "../context/AuthProvider";
import { ShowModalContext } from "../context/ShowModalProvider";
import { PlainTextContext } from "../context/PlainTextProvider";
import { ViewModalContext } from "../context/ViewModalProvider";
import CreateMessage from "../config/CreateMessageAction";
import ViewMessage from "../config/GetplainTextAction";

const Modal = ({ titleGot, messageGot, inputFields, method }) => {
  let fieldsState = {};

  const fields = inputFields;
  //This is used for setting the flag to true so that reloading can be done
  // to fetch latest lists of messages on form Submit
  const { setPostUpdate } = useContext(PostContext);

  //This is used to set the flag of Authenticated to true so that we can display the decry. msg
  const { setAuthenticated } = useContext(AuthContext);

  //This is used the set the value of decrypted text on Form submit
  const { decryption } = useContext(PlainTextContext);

  //This is used to handle the state of the create message modal
  const { showModal, setShowModal } = useContext(ShowModalContext);

  //This is used to handle the state of the view Modal
  const { viewModal, setViewModal } = useContext(ViewModalContext);

  //setting the key name with field name and value = ''
  fields.forEach((field) => (fieldsState[field.name] = ""));
  const [inputFieldState, setInputFieldState] = useState(fieldsState);

  const handleChange = (e) => {
    setInputFieldState({ ...inputFieldState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/*  Code for Modal}   */}

      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-zinc-900 outline-none focus:outline-none">
              {/*header*/}

              <ModalHeader headerTitle={titleGot} method={method} />

              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="px-2 pb-3">
                  {fields.map((field, i) => (
                    <div className="w-full mb-2" key={i}>
                      <form
                        className="flex justify-center"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          if (method === "create") {
                            await CreateMessage(inputFieldState);
                            setPostUpdate();
                            setShowModal(!showModal);
                          } else if (method === "view") {
                            const response = await ViewMessage(
                              inputFieldState.password,
                              messageGot
                            );
                            if (response.status === 200) {
                              setAuthenticated(true);
                              await decryption(response.data.data);
                            }
                            setViewModal(!viewModal);
                          }
                        }}
                      >
                        <ModalInput
                          key={field.id}
                          handleChange={handleChange}
                          value={inputFieldState[field.name]}
                          id={field.id}
                          name={field.name}
                          type={field.type}
                          isRequired={field.isRequired}
                          placeholder={field.placeholder}
                        />
                      </form>
                    </div>
                  ))}
                </div>
              </div>
              {/*footer*/}
              <ModalFooter
                inputFieldState={inputFieldState}
                messageGot={messageGot}
                method={method}
              />
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </div>
  );
};

export default Modal;

import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { PostContext } from "../context/PostProvider";
import { PlainTextContext } from "../context/PlainTextProvider";
import { ShowModalContext } from "../context/ShowModalProvider";
import { AuthContext } from "../context/AuthProvider";
import { ViewModalContext } from "../context/ViewModalProvider";
import CreateMessage from "../config/CreateMessageAction";
import ViewMessage from "../config/GetplainTextAction";

export const ModalFooter = ({ inputFieldState, method, messageGot }) => {
  const { t } = useTranslation();
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

  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
      <button
        className="text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          if (method === "create") {
            setShowModal(!showModal);
          } else if (method === "view") {
            setViewModal(!viewModal);
          }
        }}
      >
        {t("Close")}
      </button>
      <button
        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={async () => {
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
        {/* {dynamic button text} */}
        {method === "view" ? t("Apply") : t("Save Changes")}
      </button>
    </div>
  );
};

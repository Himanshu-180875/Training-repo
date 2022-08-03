import { useTranslation } from 'react-i18next'
import React, { useContext } from "react";
import { ShowModalContext } from "../context/ShowModalProvider";
import { ViewModalContext } from "../context/ViewModalProvider";

const ModalHeader = ({ headerTitle, method }) => {
  const { t } = useTranslation()
  //This is used to handle the state of the create message modal
  const { showModal, setShowModal } = useContext(ShowModalContext);

  //This is used to handle the state of the view Modal
  const { viewModal, setViewModal } = useContext(ViewModalContext);

  return (
    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
      <h3 className="text-2xl font-semibold dark:text-gray-200">
        {headerTitle !== undefined ? headerTitle : t("Create Message")}
      </h3>
      <button
        className="p-1 ml-auto bg-white border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none dark:bg-zinc-900 dark:text-gray-200"
        onClick={() => {
          if (method === "view") {
            setViewModal(!viewModal);
          } else if (method === "create") {
            setShowModal(!showModal);
          }
        }}
      >
        <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none dark:bg-zinc-900 dark:text-gray-200">
          ×
        </span>
      </button>
    </div>
  );
};

export default ModalHeader;

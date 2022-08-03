import React, { useContext } from "react";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { ShowModalContext } from "../context/ShowModalProvider";
export const MobileMenuDialog = ({ isOpen, logout }) => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  const { t } = useTranslation();

  return (
    // {code for opening the menu in mobile with transition effects}
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <a
            href="/posts"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {t("All Messages")}
          </a> */}

          <a
            // href="#"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setShowModal(!showModal)}
          >
            {t("Create Message")}
          </a>
          <a
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => logout()}
          >
            {t("Logout")}
          </a>
        </div>
      </div>
    </Transition>
  );
};

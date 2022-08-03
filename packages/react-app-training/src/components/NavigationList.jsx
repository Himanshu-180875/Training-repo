import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ShowModalContext } from "../context/ShowModalProvider";
import { MobileMenuButton } from "./MobileMenuButton";
import Toggle from "./Toggle";
import { LanguageDropdown } from "./LanguageDropdown";
import Plus from "../icons/Plus";
import { Email } from "../icons/Email";

export const NavigationList = ({ logo, isOpen, setIsOpen, logout }) => {
  const { t } = useTranslation();

  //for showing the create modal
  const { showModal, setShowModal } = useContext(ShowModalContext);
  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center mr-auto">
        <a className="flex-shrink-0" href="/posts">
          <img className="h-28 w-28" src={logo} alt="Workflow" />
        </a>
        <div className="hidden md:block">
          <div className="ml-10 items-baseline=" onClick={() => setShowModal(!showModal)}>
            {/* <a
              href="/posts"
              className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("All Messages")}
            </a> */}
            <div className="flex justify-center   ">
              
              <div className="text-white hover:bg-gray-700">
                <Plus/>
              </div>
            </div>

            <a
              // href="#"
              className="text-white py-2 rounded-md text-sm font-medium"
              
            >
              {t("Create Message")}
            </a>
          </div>
        </div>
      </div>
      <div className="ml-auto mr-4 text-white">
        <LanguageDropdown />
      </div>
      <div className="ml-4 mr-4">
        <Toggle />
      </div>
      <div className="hidden md:block">
        <a
          className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => logout()}
        >
          {t("Logout")}
        </a>
      </div>

      {/* {for showing the menu icon and closing the menu icon} */}
      <div className="-mr-2 flex md:hidden">
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../config/axios";
import logo from "../assests/logo1.png";
import Modal from "./Modal";
import { createMessageFields } from "./FormFields";
import { NavigationList } from "./NavigationList";
import { MobileMenuDialog } from "./MobileMenuDialog";
import { ShowModalContext } from "../context/ShowModalProvider";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  //Through this I'm checking the create Modal value If it is true then only I'm showing
  const { showModal } = useContext(ShowModalContext);
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("/users/logout")
      .then((response) => {
        toast.success(response.data.message);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      {/* { navabar start} */}
      <div>
        {/* {navigation links} */}
        <nav className="bg-blue-800">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <NavigationList
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              logo={logo}
              logout={logout}
            />
          </div>

          {/* {Mobile Navigation} */}
          <MobileMenuDialog isOpen={isOpen} logout={logout} />
        </nav>
      </div>
      {showModal ? (
        <Modal inputFields={createMessageFields} method="create" />
      ) : null}
    </>
  );
}

export default Nav;

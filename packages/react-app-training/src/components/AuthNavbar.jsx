import React from "react";
import { LanguageDropdown } from "./LanguageDropdown";
import Toggle from "./Toggle";

export const LoginNavbar = () => {
  return (
    <div className="flex p-8 ">
      <div className="ml-auto p-2.5 pr-5">
        <LanguageDropdown />
      </div>
      <div className="">
        <Toggle />
      </div>
    </div>
  );
};

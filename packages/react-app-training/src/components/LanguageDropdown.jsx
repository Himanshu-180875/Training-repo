import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";

export const LanguageDropdown = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="cursor-pointer dark:text-white">
      {lang === "en" ? (
        <div onClick={() => changeLanguage("hi")}>हिन्दी</div>
      ) : (
        <div onClick={() => changeLanguage("en")}>English</div>
      )}
    </div>
  );
};

import React from 'react';

import { Link } from "react-router-dom";
import crypto from "../assests/1.jpg";
import { useTranslation } from 'react-i18next'



//This is a header for login and Signup page
export default function Header({ heading, paragraph, linkName, linkUrl }) {
  const {t} = useTranslation(); 
  
  return (
    <div className="mb-10">
  

 
      <div className="flex justify-center">
        <img alt="" className="h-2/6 w-2/6" src={crypto} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold  text-black dark:text-gray-300">
        {t([heading],{heading})}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5 text-black dark:text-gray-300">
        {t([paragraph],{paragraph})}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-blue-800 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-500"
        >
          {t([linkName],{linkName})}
        </Link>
      </p>
     

    </div>
  );
}

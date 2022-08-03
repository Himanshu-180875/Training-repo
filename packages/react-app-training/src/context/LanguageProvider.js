import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageContext = React.createContext();



export const LanguageProvider = (props) => {
    const {i18n } = useTranslation(); 
  
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));
    // This function put query that helps to 
    // change the language
    
    const changeLanguage = (val) => {

        i18n.changeLanguage(val);
        setLang(val)
        
    
      };
  return (
   <LanguageContext.Provider value={{lang, changeLanguage}}>
    {props.children}
   </LanguageContext.Provider>
  )
}

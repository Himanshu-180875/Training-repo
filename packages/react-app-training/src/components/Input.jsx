import { useTranslation } from "react-i18next";
import { Email } from "../icons/Email";

const fixedInputClass =
  "bg-white dark:bg-zinc-700 dark:placeholder-gray-300 dark:text-gray-100 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:z-10 sm:text-sm";

//This is input code for login and signup
export default function Input({
  handleChange,
  value,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div className="my-5">
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={t([placeholder], { placeholder })}
        autoComplete="off"
      />
    </div>
  );
}

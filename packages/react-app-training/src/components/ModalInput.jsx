import { t } from "i18next";

const fixedInputClass =
  "px-8 w-full bg-white dark:bg-zinc-700 dark:placeholder-gray-300 dark:text-gray-100 border border-slate-400 rounded py-4 text-gray-900 focus:outline-none placeholder-gray-600";

//This is input code for Modal Input Boxes
export default function ModalInput({
  handleChange,
  value,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  return (
    <div className="">
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={t([placeholder], { placeholder })}
      />
    </div>
  );
}

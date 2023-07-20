/* eslint-disable react/button-has-type */
import { BiLoaderCircle } from "react-icons/bi";

const Button = ({
  label,
  disabled,
  type,
  display,
  prefix,
  suffix,
  loading,
  onClick,
  variant,
  size,
}) => {
  let textColor;
  let bgColor;
  let textColorHover;
  let bgColorHover;
  let padding;
  let fontSize;

  switch (variant) {
    case "primary":
      textColor = "text-white";
      textColorHover = "hover:text-white";
      bgColor = "bg-nav";
      bgColorHover = "hover:bg-primary";
      break;

    case "secondary":
      textColor = "text-primary";
      textColorHover = "hover:text-primary";
      bgColor = "bg-white";
      bgColorHover = "hover:bg-white";
      break;

    default:
  }

  switch (size) {
    case "sm":
      padding = "px-4 py-3 min-h-[49.14px]";
      fontSize = "text-base";
      break;
    case "md":
      padding = "px-5 py-5 min-h-[65.14px]";
      fontSize = "text-sm";
      break;
    default:
  }

  const baseStyle = `${fontSize} ${padding} ${textColor} ${bgColorHover} ${textColorHover} text-[18px] cursor-pointer font-Inter font-bold rounded-lg flex justify-center items-center transition duration-300 ${bgColor}`;

  const style = `
  ${display === "inline" ? "inline" : "w-full"}
  ${disabled || loading ? `opacity-50 cursor-not-allowed` : null}
  ${baseStyle}`;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${style}`}
    >
      {/* If lodaing is true, hide all icons & display loading icon only */}
      {loading ? (
        <span className="animate-spin">
          <BiLoaderCircle className={`${textColor}`} />
        </span>
      ) : (
        <div className="flex items-center">
          {prefix ? <span className="mr-3">{prefix}</span> : null}
          <span>{label}</span>
          {suffix ? <span className="ml-3">{suffix}</span> : null}
        </div>
      )}
    </button>
  );
};

export default Button;

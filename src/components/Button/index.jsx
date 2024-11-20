/* eslint-disable react/prop-types */
export const Button = ({
  type = "button",
  text = "Button",
  onClick = () => {},
  icon = null,
  variant = "primary",
  ...props
}) => {
  let classes =
    "flex justify-center font-xl items-center gap-x-4 px-4 py-2 rounded-md transition-all border-2 ";
  if (variant == "primary") {
    classes +=
      "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600";
  } else if (variant == "secondary") {
    classes += "border-blue-400 hover:border-blue-500 text-blue-500";
  } else if (variant == "on") {
    classes +=
      "bg-green-500 text-white border-green-500 hover:border-green-600 hover:bg-green-600";
  } else if (variant == "off") {
    classes +=
      "bg-red-500 text-white border-red-500 hover:border-red-600 hover:bg-red-600";
  } else {
    classes += `${variant} font-semibold`;
  }
  return (
    <button type={type} onClick={onClick} {...props} className={classes}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

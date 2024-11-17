/* eslint-disable react/prop-types */
export const Input = ({
  placeholder,
  id,
  type = "text",
  step = null,
  min = null,
  max = null,
  onChange = () => {},
}) => {
  return (
    <input
      className="border-2 px-4 py-2 rounded-md outline-none w-full focus:border-blue-500"
      placeholder={placeholder}
      id={id}
      name={id}
      type={type}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

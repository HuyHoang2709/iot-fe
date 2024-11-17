/* eslint-disable react/prop-types */
export const Select = ({ id, options, onChange = () => {} }) => {
  return (
    <select
      className="border-2 px-3 py-2 rounded-md focus:border-blue-500 outline-none w-full"
      onChange={onChange}
      name={id}
      id={id}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
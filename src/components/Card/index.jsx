/* eslint-disable react/prop-types */
export const Card = (props) => {
  return <div className={`border-2 p-4 rounded-md ${props.className}`}>{props.children}</div>;
};

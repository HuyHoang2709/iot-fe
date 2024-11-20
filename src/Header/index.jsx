import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */
export const Header = ({ user }) => {
  return (
    <div className="px-6 py-4 border-b flex justify-end items-center gap-x-4">
      <p className="text-lg font-semibold text-blue-600">{user.name}</p>
      <Link
        to="/profile"
        className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

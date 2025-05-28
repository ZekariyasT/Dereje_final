import React from "react";
import { Link } from "react-router-dom";

const Panel = ({ children, link }) => {
  return (
    <div>
      <button className="btn btn-light w-100 p-4 fs-4" type="submit">
        <Link
          to={link}
          className="text-black text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center"
        >
          {children}
        </Link>
      </button>
    </div>
  );
};

export default Panel;

import React from "react";
import { Link } from "react-router-dom";

export const LinkCity = ({ city }) => {
  const { id, name } = city;
  return (
    <li>
      <a className="no-text-decoration" href={`/city/${id}`}>
        {name}
      </a>
    </li>
  );
};

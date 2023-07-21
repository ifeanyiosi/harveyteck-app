import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Spinner = ({ className, ...rest }) => (
  <AiOutlineLoading className={`animate-spin inline ${className}`} {...rest} />
);

export default Spinner;

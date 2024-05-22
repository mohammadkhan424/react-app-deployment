import { type } from "@testing-library/user-event/dist/type";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import propsTypes from "prop-types";
import React, { version } from "react";

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: "false",
};
Button.propsTypes = {
  children: propsTypes.node.isRequired,
  version: propsTypes.string,
  type: propsTypes.string,
  isDisabled: propsTypes.bool,
};
export default Button;

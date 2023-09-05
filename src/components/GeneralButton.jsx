import React from "react";

function GeneralButton({ children, ...props }) {
  return <button className="general-button" {...props}>{children}</button>;
}

export default GeneralButton;

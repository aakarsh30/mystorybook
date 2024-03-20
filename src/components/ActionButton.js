import React from "react";
import PropTypes from "prop-types";

function ActionButton(
  {
    type = "Default",
    status,
    size = "Default",
    iconOnly = false,
    icon,
    text,
    children,
    textandIcon = false,
  },
  ...props
) {
  let pad = 0;
  let backColor = "transparent";
  let border = "none";
  let textColor = "";
  if (size === "Default") pad = 28;
  if (size === "Small") pad = 24;
  if (size === "X-Small") pad = 22;

  if (type === "Default") {
    textColor = "#47B647";
    if (status === "Hover") {
      backColor = "#EDFAED";
      border = "2px solid #EDFAED";
    }
  }
  if (type === "Neutral") {
    textColor = "#282829";
    if (status === "Hover") {
      border = "2px solid #F2F3F5";
      backColor = "#F2F3F5";
    }
  }
  if (type === "Reverse") {
    textColor = "#FCFCFC";
    if (status === "Hover") {
      border = "2px solid #282829";
      backColor = "#282829";
    }
  }

  const styles = {
    border: border,
    backgroundColor: backColor,
    borderRadius: "4px",
    padding: `${pad - 18}px`,
    color: textColor,
    cursor: status === "Disabled" ? "auto" : "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: `${pad - 11.5}px`,
    opacity: status === "Disabled" ? "30%" : "100",
  };
  return (
    <button style={styles}>
      {textandIcon === true ? (
        <>
          {icon}
          {text}
        </>
      ) : iconOnly === true ? (
        icon
      ) : (
        text
      )}
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf(["Default", "Neutral", "Reverse"]),
  size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
  text: PropTypes.string,
  iconOnly: PropTypes.bool,
  status: PropTypes.oneOf(["Default", "Hover", "Disabled"]),
  textandIcon: PropTypes.bool,
};

export default ActionButton;

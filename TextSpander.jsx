import { useState } from "react";
import PropTypes from "prop-types";

const TextSpander = ({
  children,
  defaultExpand = true,
  wordCount = 20,
  buttonColor = "red",
  expanderText = "Show More",
  CollapserText = "Show Less",
  className = "",
}) => {
  const [isExpand, setIsExpand] = useState(defaultExpand);
  const text = children;
  const buttonStyle = {
    marginLeft: "5px",
    color: buttonColor,
    cursor: "pointer",
  };
  return (
    <div className={className}>
      <span>
        {isExpand ? text : text.split(" ").slice(0, wordCount).join(" ")}
      </span>
      <span style={buttonStyle} onClick={() => setIsExpand((val) => !val)}>
        {isExpand ? CollapserText : expanderText}
      </span>
    </div>
  );
};

TextSpander.propTypes = {
  defaultExpand: PropTypes.bool,
  wordCount: PropTypes.number,
  buttonColor: PropTypes.string,
  expanderText: PropTypes.string,
  CollapserText: PropTypes.string,
  className: PropTypes.string,
};

export default TextSpander;

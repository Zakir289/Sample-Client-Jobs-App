import React from "react";
import "./Wrapper.css";
import PropTypes from "prop-types";

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <h1> Sample Application</h1>
      {props.children}
    </div>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.any,
};

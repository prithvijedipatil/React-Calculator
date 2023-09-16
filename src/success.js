import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const success = ({ result, message }) => {
  console.log(result, message);
  return (
    <div id="success">
      {result != null && !message ? (
        <>
          <h2 className="yayy">Success</h2>
          <h2>{result}</h2>
        </>
      ) : (
        <>
          <h2 className="nayy">Error</h2>
          <h4>{message}</h4>
        </>
      )}
    </div>
  );
};

export default success;

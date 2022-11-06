import React, { useState } from "react";

export default function TestError() {
  const [errrorText, setErrorText] = useState("");

  function handleError(e) {
    if (e.target.value.toUpperCase() == "ERROR") {
      setErrorText("ERROR");
    }
  }
  if (errrorText == "ERROR") {
    throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <input
        onChange={handleError}
        type="text"
        placeholder="Enter error to check error boundary"
      />
    </div>
  );
}

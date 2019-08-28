import React from "react";

const Download = props => {
  const downloadFile = data => {
    const element = document.createElement("a");
    const file = new Blob([data], {
      type: props.fileType
    });
    element.href = URL.createObjectURL(file);
    element.download = props.fileDownloadName;
    // Required for this to work in FireFox
    document.body.appendChild(element);
    element.click();
  };

  return (
    <button onClick={() => downloadFile(props.elements)}>{props.text}</button>
  );
};

export default Download;

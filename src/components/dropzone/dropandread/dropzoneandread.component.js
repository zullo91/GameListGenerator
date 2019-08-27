import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../css/dropzone.css";

const DropZoneAndRead = props => {
  let fileReader;

  const handleFileRead = e => {
    const content = fileReader.result;
    let a = content;
    let markToFind = "<gameList>";
    let b = "<MyWord> My Word </MyWord>";
    let position = content.indexOf(markToFind) + markToFind.length;
    let output = [a.slice(0, position), b, a.slice(position)].join("\n");
    console.log(output);
  };

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const onDrop = useCallback(acceptedFiles => {
    handleFileChosen(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag File to Merge</p>
      </div>
      <aside>
        {files.length > 0 ? (
          <div>
            <h4>Inserted Files</h4>
            <ul>{files}</ul>
          </div>
        ) : null}
      </aside>
    </section>
  );
};

export default DropZoneAndRead;

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../css/dropzone.css";

const DropZoneAndMerge = props => {
  var onDropCallback = props.onDropCallback;
  var elements = props.elements;

  const onDrop = useCallback(
    acceptedFiles => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const content = reader.result;
        let a = content;
        let markToFind = "<gameList>";
        let b = elements;
        let position = content.indexOf(markToFind) + markToFind.length;
        let output = [a.slice(0, position), b, a.slice(position)].join("\n");
        console.log(output);
        onDropCallback(output);
      };

      acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    },
    [onDropCallback, elements]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "text/xml"
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section>
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

export default DropZoneAndMerge;

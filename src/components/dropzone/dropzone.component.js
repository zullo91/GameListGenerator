import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./css/dropzone.css";

const DropZone = props => {
  var getFiles = props.getFiles;

  const onDrop = useCallback(
    acceptedFiles => {
      getFiles(acceptedFiles);
    },
    [getFiles]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
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
        <p>Drag 'n' drop ROM files here, or click to select files</p>
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

export default DropZone;

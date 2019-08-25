import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = props => {
  const onDrop = useCallback(acceptedFiles => {
    //console.log(acceptedFiles);
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
        <p>Drag 'n' drop some files here, or click to select files</p>
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

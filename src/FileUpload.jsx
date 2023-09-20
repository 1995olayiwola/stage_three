import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

function FileUpload({ onFileUpload }) {
    const [isRotating, setIsRotating] = React.useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the uploaded files
    setIsRotating(false); 
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // You can specify accepted file types here
   
  });

  return (
    <div className='file-upload'>
    <div {...getRootProps()} className={`dropzone ${isRotating ? 'rotate' : ''}`}>
      <input {...getInputProps()} />
      <p>Drag &amp; drop files here, or click to select files</p>
    </div>
    </div>
  );
}

export default FileUpload;

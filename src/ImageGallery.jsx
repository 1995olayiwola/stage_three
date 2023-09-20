import React, { useState } from 'react';
import FileUpload from './FileUpload';
import './App.css';
import Loading from './Loading';
import Navbar from './Navbar';

const ImageGallery=()=> {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading,setLoading] = React.useState(false);

  const handleFileUpload = (files) => {
    setLoading(true);
    // You can process the uploaded files here
    setUploadedFiles(files);
    setLoading(false);
  };
console.log(uploadedFiles);
  return (
    <div className="App">
        <Navbar/>
      <h1 style={{textAlign:'center'}}>Drag and Drop File Upload</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {uploadedFiles.length > 0 && (
        
        <div className="image-viewer">
        <h2>Image Gallery</h2>
        {loading && <Loading/>}
        <div className="gallery">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="gallery-item">
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      )}
    </div>
  );
}

export default ImageGallery;

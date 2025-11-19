import { Upload } from 'lucide-react';
import React, { useState } from 'react';

const ImageUpload = ({ onFilesAdded }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && onFilesAdded) {
      onFilesAdded(files);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && onFilesAdded) {
      onFilesAdded(files);
    }
  };


  return (
    <>
        <div
        className={`flex flex-col justify-center items-center border rounded-lg border-neutral-300 p-10 ${isDragActive ? 'active' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
        <Upload size={40} />
      <input
        type="file"
        accept='image/*'
        multiple
        onChange={handleFileSelect}
        className='hidden'
        id="file-upload"
        />
      <label htmlFor="file-upload">
        {isDragActive
          ? 'Drop the files here...'
          : 'Drag and drop some files here, or click to select files'}
      </label>
    </div>
          </>
  );
};

export default ImageUpload;
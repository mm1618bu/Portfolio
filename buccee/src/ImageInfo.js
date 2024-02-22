import React from 'react';

const ImageInfo = ({ image, text, onClose }) => {

  return (
    <div className="image-info" onClick={onClose}>
      <p>{text}</p>
    </div>
  );
};

export default ImageInfo;
// src/components/ImageInfo.js

import React from 'react';

const ImageInfo = ({ imageUrl, alt }) => {
  return (
    <div className="image-info">
      <img src={imageUrl} alt={alt} />
      {/* Additional information can be displayed here */}
    </div>
  );
};

export default ImageInfo;

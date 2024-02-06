// src/components/Gallery.js

import React, { useState } from 'react';
import './Gallery.css';
import photo1 from './img/image2.jpg';
import ImageInfo from './ImageInfo';

const Gallery = () => {
  const [showImageInfo, setShowImageInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowImageInfo(true);
  };

  return (
    <div className="gallery">
      {/* Display your photos here */}
      {/* Example: */}
      <img src="./img/grid_0.png" alt="Photo 1" onClick={() => handleClick('./img/grid_0.png')}
      />
      <img src={photo1} alt="Photo 2" onClick={() => handleClick('photo2.jpg')}
      />
      {/* Add more photos as needed */}

      {/* Show ImageInfo component when an image is clicked */}
      {showImageInfo && (
        <div className="image-info-overlay">
          <ImageInfo imageUrl={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;

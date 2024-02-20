// src/components/Gallery.js

import React, { useState } from 'react';
import './Gallery.css';
import photo1 from './img/image2.jpg';
import photo2 from './img/image3.jpg';
import photo3 from './img/IMG_6437.jpg';
import photo4 from './img/IMG_6355.jpg';
import photo5 from './img/IMG_6356.jpg';
import photo6 from './img/IMG_6359.jpg';
import photo7 from './img/IMG_6437.jpg';
import photo8 from './img/IMG_6460.jpg';
import photo9 from './img/IMG_6461.jpg';
import photo10 from './img/IMG_6478.jpg';
import photo11 from './img/IMG_6499.jpg';
import photo12 from './img/IMG_6519.jpg';
import photo13 from './img/IMG_6592.jpg';
import photo14 from './img/IMG_6593.jpg';
import photo15 from './img/IMG_6594.jpg';
import photo16 from './img/IMG_6595.jpg';
import photo17 from './img/IMG_6750.jpg';
import photo18 from './img/IMG_6751.jpg';
import photo19 from './img/IMG_6752.jpg';
import photo20 from './img/IMG_6776.jpg';
import photo21 from './img/IMG_6777.jpg';
import photo22 from './img/IMG_6778.jpg';
import photo23 from './img/IMG_6788.jpg';
import photo24 from './img/IMG_6789.jpg';
import ImageInfo from './ImageInfo';

const Gallery = () => {
  const [showImageInfo, setShowImageInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageText, setImageText] = useState('');

  const handleClick = (image, text) => {
    setSelectedImage(image);
    setImageText(text);
    setShowImageInfo(true);
  };

  const handleClose = () => {
    setShowImageInfo(false);
  }

  return (
    <div className="gallery">
      {/* Display your photos here */}
      {/* Example: */}
      <img src={photo1} alt="Photo 1" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo2} alt="Photo 2" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo3} alt="Photo 3" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo4} alt="Photo 4" onClick={() => handleClick('photo2.jpg','')}/>
      <img src={photo5} alt="Photo 3" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo6} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo7} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo8} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo9} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo10} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo11} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo12} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo13} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo14} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo15} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo16} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo17} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo18} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo19} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo20} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo21} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo22} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo23} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      <img src={photo24} alt="Photo 4" onClick={() => handleClick('photo2.jpg','Help me!')}/>
      {/* Add more photos as needed */}

      {/* Show ImageInfo component when an image is clicked */}
      {showImageInfo && (
        <div className="image-info-overlay">
          <ImageInfo image={selectedImage} text={imageText} onClose={handleClose}/>
        </div>
      )}
    </div>
  );
};

export default Gallery;

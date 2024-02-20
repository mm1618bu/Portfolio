import React from 'react';

const ImageInfo = ({ image, text, onClose }) => {

  
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      backgroundColor: '#f5f5f5',
      color: '#333',
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      cursor: 'pointer',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
  };

  return (
    <div className="image-info" onClick={onClose} style={style.container}>
      <p>{text}</p>
    </div>
  );
};

export default ImageInfo;
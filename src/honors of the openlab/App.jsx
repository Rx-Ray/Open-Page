import React, { useState } from 'react';
import './App.css';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

function App() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="App">
      <h1 className="blue-text" style={{ marginTop: '20px' }}>Honors of the OpenLab</h1>
      <div className={`image-container ${showAll ? 'show-all' : ''}`}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="placeholder" />
        ))}
        <a href="/newpage" target="_blank" rel="noopener noreferrer">
          <button onClick={toggleShowAll} className="more-button" style={{ left: '-20px' }}>
            Learn more about the honors of the OpenLab
          </button>
        </a>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
      </div>
    </div>
  );
}

export default App;
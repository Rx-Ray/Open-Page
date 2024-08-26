import React from 'react';
import './His.css';

const Tweet = () => {
  return (
    <div className="tweet">
      <div>
        <p className="time">Stage One</p>
      </div>
      <div className="main">
        <div className="title">
          <a href="#">
            <img alt="标题1" className="cover" />
          </a>
        </div>
        <div className="divider"></div>
        <div className="content">
          <a href="Plot.html" target="_blank" className="clickable">
            History of the first phase of the OpenLab
          </a>
          <p className="abstract">简介</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="header">
      <h3 style={{ fontSize: '2em', fontWeight: 'bold' }}>实验室历史</h3>
      <span><img alt="Logo" className="logo" /></span>
      <Tweet />
      {/* Repeat the structure for other stages */}
      {/* ... */}
    </div>
  );
};

export default App;

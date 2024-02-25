import React from 'react';
import './course.css'; 

const LaboratoryCourseTweet = () => {
  return (
    <div className="container">
      <div className="around-article">
        <span className="pillow-blue-dot1"></span>
        <span className="pillow-blue-dot2"></span>
        <div className="header">
          <h1>实验室课程推文</h1>
        </div>
        <span className="normal-blue-dot1"></span>
        <span className="normal-blue-dot2"></span>
      </div>
      <div className="main-article-content">
        <div className="box"></div>
        <div className="dots">
          <div className="article-content">
            <span className="orange-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
          <div className="article-content">
            <span className="green-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
          <div className="article-content">
            <span className="orange-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
          <div className="article-content">
            <span className="blue-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
          <div className="article-content">
            <span className="yellow-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
          <div className="article-content">
            <span className="orange-dot"></span>
            <div className="gray-rectangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LaboratoryCourseTweet;

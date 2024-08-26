import React, { useState } from 'react';
import './App.css';
import { FloatButton } from 'antd';
import {  CommentOutlined,CloudServerOutlined,HomeOutlined,UsergroupAddOutlined, ExperimentFilled} from '@ant-design/icons';
const images = [
  'blog-post-01.jpg',
  'blog-post-01.jpg',
  'blog-post-03.jpg',
  'blog-post-04.jpg',
];

function App() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="App">
      <h1 className="blue-text" style={{ marginTop: '20px' }}> Honors of the OpenLab </h1>
      <div className={`image-container ${showAll ? 'show-all' : ''}`}>
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`placeholder ${index}`} />
            <p className="image-caption">Image {index + 1}</p>
          </div>
        ))}
        <a href="/newpage" target="_blank" rel="noopener noreferrer">
          <button onClick={toggleShowAll} className="more-button" style={{ right: '20px' }}>
            Learn more about the honors of the OpenLab
          </button>
        </a>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
          top:1,
        }}
      >
        <FloatButton icon={<HomeOutlined />} tooltip={'个人主页'} href='###' target='_self' badge={{color:'blue'}}></FloatButton>
        <FloatButton icon={<CloudServerOutlined />} tooltip={"往期资料"} href='###'target='_blank' badge={{color:'blue'}}></FloatButton>
        <FloatButton  icon={<CommentOutlined />} tooltip={"OpenPage入口"} href='###' target='_blank' badge={{color:'blue'}}></FloatButton>
        <FloatButton icon={<UsergroupAddOutlined />} tooltip={"组队界面"} href="###" target='_blank' badge={{color:'blue'}}></FloatButton>
      </FloatButton.Group>
      </div>
    </div>
  );
}

export default App;

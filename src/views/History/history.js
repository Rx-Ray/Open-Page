import "./history.css"
import en_history from "./img/en_history.png"
import pic1 from "./img/1.png"
import pic2 from "./img/2.jpg"
import pic3 from "./img/3.png"
import pic4 from "./img/4.jpg"
import { useEffect, useState } from "react"


export default function History() {

  return (
    <div className="history">
      <img src={en_history} className="en-history" />
      <p className="cn-history">实验室历史</p>
      <div className="history-intro">
        <p className="history-intro-text">示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍
          示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍示例文字介绍</p>
      </div>
      <History_image_display />
      {/* 备注：这部分没有给图片所以用学长讲堂的图片做一下示例 */}
    </div>
  )
}

function History_image_display() {
  const images = [pic1, pic2, pic3, pic4]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (isRotating) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [isRotating, images, currentImageIndex]);

  function handleRotate() {
    setIsRotating(!isRotating);
  };
  function handleImageClick() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="history-image">
      <img
        src={images[currentImageIndex]}
        alt="Rotating Image"
        onClick={handleImageClick}
        className="history-image-carousel"
      />
      <div className="history-nxtbutton">
        <p style={{ margin: 0, marginLeft: "20px" }} onClick={handleImageClick}>{'>'}</p>
      </div>
    </div>
  );
}


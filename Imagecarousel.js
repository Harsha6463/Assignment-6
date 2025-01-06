import React, { useEffect, useState } from "react";

function Imagecarousel() {
  const images = [
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png/",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/597.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/212.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/110.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/136.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/136.png",
    "https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png",
  

  ];

  const [currentIndex, setCurrentindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentindex((index) => (index + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <h1>Image Carousel</h1>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Imagecarousel;

import React, { useState } from "react";
import imagesData from "../shared/constant/imagesData";

console.log("imagesData", imagesData);

const ImageToggleComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagename, setImageName] = useState(imagesData[0]);

  const toggleImage = () => {
    setCurrentIndex((index) => {
      const newIndex = (index + 1) % imagesData.length;
      setImageName("image" + (newIndex + 1) + ".jpg");
      return newIndex;
    });
  };

  return (
    <div>
      <h3>Let s Toggle the image</h3>
      <img src={imagesData[currentIndex]} alt={imagename}></img>
      <h2>{imagename}</h2>
      <button onClick={() => toggleImage()}>Toggle Image</button>
    </div>
  );
};

export default ImageToggleComp;

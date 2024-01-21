
 import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import  '../../../App.js';

const imageData = [
    {
      label: "Image1",
      alt: "image1",
      url:"./Images/Account.jpg"
    },
    {
      label: "Image 2",
      alt: "image2",
      url:"./Images/Credit_card.jpg"
    },
    {
      label: "Image 3",
      alt: "image3",
      url: "./Images/loan.png"
    }
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      <p className="legend">{image.label}</p>
    </div>
  ));

  export default function HomePageView() {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    return (
      <div className="dataInImage">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </div>
    );
  }
  
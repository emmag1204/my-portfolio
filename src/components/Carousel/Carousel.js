import React, { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const data = [
    {
        image: require('./img/kueski-logo.jpeg'),
        title: 'INTERFACE FOR KUESKI ADMINISTRATORS',
        text: 'Developed a web interface with NodeJS, React and MySQL data base, it was a school project for Kueski, the interface was developed to valid ARCO rights of Kueski clients by company administrators.',
        videoLink: 'https://youtu.be/FExIM3lasQ0',
    },
    {
        image: require('./img/parking.png'),
        title: 'DESIGN AND BUILDING OF AN AUTOMATIZED PARKING',
        text: 'Build and design a scale model prototype of an automated parking with sensors, data base and an app in React for facilitating the searching of available parking spots. Connect real-time database to ultrasonic sensors that indicate if the place is available or not.',
        videoLink: 'https://youtu.be/zILJUfAmDR4',
    },
    {
        image: require('./img/topologia-red.png'),
        title: 'NETWORKS',
        text: 'Developed a networks project to change analogic sensors in Tec de Monterrey residence halls to digital sensors connected to Wi-Fi.  Network project simulated in Cisco Packet Tracer.',
        videoLink: 'https://youtu.be/FExIM3lasQ0',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {data.map((slide, index) => (
          <div key={index} className='carousel-item'>
            <img className='carousel-image' src={slide.image} alt='project-img'/>
            <div className='carousel-content'>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <a className='carousel-video' href={slide.videoLink}>Click here for video demo</a>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-buttons'>
        <button className='carousel-btn prev' onClick={goToPrevSlide}>&larr;</button>
        <button className='carousel-btn next' onClick={goToNextSlide}>&rarr;</button>
      </div>
      <div className='carousel-dots'>
        {data.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
export default Carousel;
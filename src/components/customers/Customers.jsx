import React, { useEffect, useState } from 'react';
import style from './customers.module.css';
import pic1 from '../../assets/pic-1.png'
import pic2 from '../../assets/pic-2.png'
import pic3 from '../../assets/pic-3.png'

export function Customers() {
  const slideImages = [
    {
      url: `${pic1}`,
      name: `Florentino Elisé`,
      title: `The taste of coffee is stunning, subtle and smooth flavor.`,
      review: ` It is very painful to get rid of obesity. Don't let No spirit be free, 
      don't let anyone run away to follow us ? 
      Necessities or works, except that these praises get a little less or? No one.`,
    },
    {
      url: `${pic2}`,
      name: `Lario Stanislas`,
      title: `The taste of coffee is stunning, subtle and smooth flavor.`,
      review: ` It is very painful to get rid of obesity. Don't let No spirit be free, 
      don't let anyone run away to follow us ? 
      Necessities or works, except that these praises get a little less or? No one.`,
    },
    {
      url: `${pic3}`,
      name: `Bemax`,
      title: `The taste of coffee is stunning, subtle and smooth flavor.`,
      review: ` It is very painful to get rid of obesity. Don't let No spirit be free, 
      don't let anyone run away to follow us ? 
      Necessities or works, except that these praises get a little less or? No one.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect (() =>{
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
      
    }, 5000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={style.customer} id='examen'>
      <h2>
      CUSTOMER'S <span>REVIEW</span>
      </h2>
      <div className={style.sliders}>
        <div className={style.slider} style={{ transform: `translateX(${-currentSlide * 600}px)` }}>
          {slideImages.map((image, index) => (
            <div key={index} className={`${style.slid_Images} ${index === currentSlide ? style.active : ''}`}>
              <img src={image.url} alt={image.name} />
              <h4>{image.name}</h4>
              <span>{image.title}</span>
              <p>{image.review}</p>
            </div>
          ))}
        </div>
        <div className={style.slid}>
          {slideImages.map((_, index) => (
            <span
              key={index}
              className={`${style.dot} ${index === currentSlide ? style.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

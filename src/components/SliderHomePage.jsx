import React, { useState } from 'react';  
import Slider from 'react-slick';  
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';  
import { useQuery } from '@tanstack/react-query';  
import { getAllProducts } from '../services/getAllProducts';  
import SkeletonLoader from './SkeletonLoader';

const MovieImage = ({ poster, title, isSelected, onClick }) => (  
  <div style={{ textAlign: 'center', margin: '0 10px 15vh 10px' }}>  
    <img  
      src={poster}  
      alt={title}  
      style={{  
        width: '200px',  
        borderRadius: '10px',  
        cursor: 'pointer',  
        border: isSelected ? '2px solid #fff' : 'none',  
        objectFit: 'cover',  
        height: isSelected ? '20rem' : '10rem',  
      }}  
      onClick={onClick}  
    />  
  </div>  
);  

const SliderHomePage = () => {  
  const { data: allMovies,isLoading } = useQuery({  
    queryKey: ['GETPRODUCTS'],  
    queryFn: () => getAllProducts(),  
  });  
  

  const [currentSlide, setCurrentSlide] = useState(0);  

  const settings = {  
    dots: false,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    autoplay: true,  
    autoplaySpeed: 3000,  
    pauseOnHover: true,  
    beforeChange: (current, next) => {  
      setCurrentSlide(next);  
    },  
  };  

  const currentBackground = allMovies?.data[currentSlide]?.poster || '';  

  const getVisibleMoviesCount = () => {  
    const width = window.innerWidth;  
    if (width > 772) return Math.min(allMovies?.data.length, 7) // up 7 list 
    if (width > 500) return Math.min(allMovies?.data.length, 4); // Up to 4  
    if (width < 500) return Math.min(allMovies?.data.length, 2); // Up to 4   
  };  

  const visibleMoviesCount = getVisibleMoviesCount();  

  return (  
    <div className={`flex flex-col justify-end h-screen overflow-hidden `}>
      <div  
        style={{  
          backgroundImage: isLoading ? 'none' : `url(${currentBackground})`,  
          backgroundSize: 'cover',  
          backgroundPosition: 'center',  
          height: '100vh',  
          position: 'absolute',  
          top: 0,  
          left: 0,  
          right: 0,  
          bottom: 0,  
          zIndex: -10,  
        }}    
      />  
      <Slider {...settings}>  
        {allMovies?.data?.slice(0, visibleMoviesCount).map((item, index) => (  
          <div key={index}></div>  
        ))}  
      </Slider>  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>  
        {allMovies?.data?.slice(0, visibleMoviesCount).map((item, index) => (  
          !isLoading ?
          <MovieImage  
            key={index}  
            poster={item?.poster}  
            title={item?.title}  
            isSelected={currentSlide === index}  
            onClick={() => setCurrentSlide(index)}  
          />  
          :
          <SkeletonLoader key={index} x="2vw" y="0" rx="10" ry="0" w="22rem" h={currentSlide === index ? '32rem' : '22rem'}  /> 
        ))}  
      </div>  
    </div>  
  );  
};  

export default SliderHomePage;
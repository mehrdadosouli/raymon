import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Counter } from '../redux/features/counter/Counter'
import { getAllProducts } from '../services/getAllProducts'
import { useQuery } from '@tanstack/react-query';
const SliderHomePage = () => {
    const { data: allMovies } = useQuery({ queryKey: ['GETPRODUCTS'], queryFn: () => getAllProducts() })

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

    return (
        <div className='flex flex-col justify-end h-screen overflow-hidden '>
            <div
                style={{
                    backgroundImage: `url(${currentBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            />

            <Slider {...settings}>
                {allMovies?.data?.map((item, index) => (
                    <div key={index}></div>
                ))}
            </Slider>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                {window.innerWidth > "992" ?
                    allMovies?.data?.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px 15vh 10px' }} className=''>
                            <img src={item.poster} alt={item.title} style={{ width: '200px', borderRadius: '10px', cursor: 'pointer', border: currentSlide === index ? '2px solid #fff' : 'none', objectFit: 'cover', height: currentSlide === index ? '20rem' : '10rem', width: currentSlide === index ? '20rem' : '10rem' }}
                                onClick={() => setCurrentSlide(index)}
                            />
                        </div>

                    )) :
                    window.innerWidth > "772" ?
                    allMovies?.data?.slice(0,7).map((item, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px 15vh 10px' }} className=''>
                            <img src={item.poster} alt={item.title} style={{ width: '200px', borderRadius: '10px', cursor: 'pointer', border: currentSlide === index ? '2px solid #fff' : 'none', objectFit: 'cover', height: currentSlide === index ? '20rem' : '10rem', width: currentSlide === index ? '20rem' : '10rem' }}
                                onClick={() => setCurrentSlide(index)}
                            />
                        </div>

                    )) 
                    :
                    allMovies?.data?.slice(0,3).map((item, index) => (
                        <div key={index} style={{ textAlign: 'center', margin: '0 10px 15vh 10px' }} className=''>
                            <img src={item.poster} alt={item.title} style={{ width: '200px', borderRadius: '10px', cursor: 'pointer', border: currentSlide === index ? '2px solid #fff' : 'none', objectFit: 'cover', height: currentSlide === index ? '20rem' : '10rem', width: currentSlide === index ? '20rem' : '10rem' }}
                                onClick={() => setCurrentSlide(index)}
                            />
                        </div>

                    )) 
                    
                    }
            </div>
        </div>
    );
};

export default SliderHomePage;
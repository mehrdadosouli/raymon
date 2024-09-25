import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const SliderHomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            title: 'Wonder Woman',
            image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/fcd165769cba76a7c9b80ea2d74f4e1ec66b93f0_1727018908.jpg?x-oss-process=image/quality,q_95',
            background: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/fcd165769cba76a7c9b80ea2d74f4e1ec66b93f0_1727018908.jpg?x-oss-process=image/quality,q_95',
        },
        {
            title: 'Batman',
            image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/52da21f391c19df8c7747e4d48700faef29f8a08_1726999912.gif?x-oss-process=image',
            background: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/52da21f391c19df8c7747e4d48700faef29f8a08_1726999912.gif?x-oss-process=image',
        },
        {
            title: 'Superman',
            image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/fcd165769cba76a7c9b80ea2d74f4e1ec66b93f0_1727018908.jpg?x-oss-process=image/quality,q_95',
            background: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/fcd165769cba76a7c9b80ea2d74f4e1ec66b93f0_1727018908.jpg?x-oss-process=image/quality,q_95',
        },
    ];

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

    const currentBackground = data[currentSlide]?.background || '';

    return (
        <div className='flex flex-col justify-end h-screen overflow-hidden relative'>
            <div
                style={{
                    backgroundImage: `url(${currentBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            />

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}></div>
                ))}
            </Slider>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                {data.map((item, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '0 10px 40px 10px' }} className=''>
                        <img src={item.image} alt={item.title} style={{ width: '200px', borderRadius: '10px', cursor: 'pointer', border: currentSlide === index ? '2px solid #fff' : 'none' }}
                            onClick={() => setCurrentSlide(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderHomePage;
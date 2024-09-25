import React from 'react';  
import { Carousel } from 'antd';  

const contentStyle = {  
    minHeight: '80vh',  
    color: '#fff',  
    lineHeight: '80vh',  
    textAlign: 'center',  
    background: '#364d79',  
    margin:0
};  

function Slider() {  
    const content = ['1','2','3','4','5']; // Dynamic content array  
    
    return (  
        <Carousel autoplay >  
            {content.map((item, index) => (  
                <div key={index}>  
                    <h3 style={contentStyle}>{item}</h3>  
                </div>  
            ))}  
        </Carousel>  
    );  
}  

export default Slider;
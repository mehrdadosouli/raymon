import React from 'react';  
import { Carousel } from 'antd';  

 

function Slider({contentStyle,content}) {  

    
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
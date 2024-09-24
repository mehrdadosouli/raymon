import React from 'react';  
import { Carousel } from 'antd';  

const contentStyle = {  
    height: '100%',  
    color: '#fff',  
    lineHeight: '43',  
    textAlign: 'center',  
    background: '#364d79',  
    margin:0
};  

function Slider() {  
    const content = ['1','2','3','4']; // Dynamic content array  
    
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
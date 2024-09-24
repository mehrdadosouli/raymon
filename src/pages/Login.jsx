import React, { useState } from 'react';
import {Flex ,Layout} from 'antd';
import AuthToggle from '../components/AuthToggle'
import Slider from '../components/Slider';
import '../styles/login.css'
const Login = () => {
    const [activeKey, setActiveKey] = useState("1");
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <Flex justify='space-between' style={{ padding: '2rem 3rem' ,display:'flex',gap:'5rem'}}  >
            <div style={{ width: '35%' ,display:'flex',flexDirection:'column',gap:'1rem'}} >
                <h3>Wellcome to the movie site</h3>
                <p className='text-secondary_text_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi necessitatibus quisquam tempora eos maiores aspernatur voluptate sapiente</p>

                <Layout style={{backgroundColor:'white'}}>
                    <AuthToggle activeKey={activeKey} setActiveKey={setActiveKey} />
                </Layout>
            </div>
            <div style={{ width: '65%', height: '81vh', overflow: 'hidden', borderRadius: '10px' }}>
                <Slider />
            </div>
        </Flex>
    );
};
export default Login;

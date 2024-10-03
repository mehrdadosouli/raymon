import React from 'react';
import { Tabs } from 'antd';
import { useQuery } from '@tanstack/react-query';
export default function Pears() {
    const { data: content ,isLoading} = useQuery({ queryKey: ['GETPRODUCTS'] })

    const modular=(content,index)=>{
        return (<div className=' flex justify-between items-center gap-10 '>
                    <div className='w-1/2'><img className={`w-full h-[400px] object-cover object-top ${isLoading ? "bg-primary_skeleton animate-pulse" : ''}`} src={content?.data[index]?.poster} alt="" /></div> 
                    <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[index]?.title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
                </div>)
    }

    const items = [
        {
            key: '1',
            label: '1991',
            children:modular(content,1) ,
        },
        {
            key: '2',
            label: '2002',
            children: modular(content,2),
        },
        {
            key: '3',
            label: '2005',
            children:modular(content,3),
        },
        {
            key: '4',
            label: '2010',
            children: modular(content,4),
        },
        {
            key: '5',
            label: '2015',
            children: modular(content,5),
        },
        {
            key: '6',
            label: '2020',
            children: modular(content,6),
        },
        {
            key: '7',
            label: '2023',
            children: modular(content,7),
        },
    ]
    return (<div className='my-20' ><h2 className='mb-5'>Pearls of Azerbaijani cinema</h2><Tabs defaultActiveKey="1" items={items} className='w-full' /></div>)
};




import React from 'react';
import { Tabs } from 'antd';
import { useQuery } from '@tanstack/react-query';
export default function Pears () {
    const { data: content } = useQuery({ queryKey: ['GETPRODUCTS'] }) 

const items = [
    {
        key: '1',
        label: '1991',
        children: <div className=' flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img className='w-full h-[400px] object-cover object-top' src={content?.data[1]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[1].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '2',
        label: '2002',
        children: <div className='flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[2]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[2].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '3',
        label: '2005',
        children: <div className='flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[3]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[3].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '4',
        label: '2010',
        children: <div className='flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[4]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[4].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '5',
        label: '2015',
        children: <div className='flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[5]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[5].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '6',
        label: '2020',
        children: <div className='flex justify-between items-center gap-10 '>
            <div className='w-1/2'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[6]?.poster} alt="" /></div>
            <div className='w-1/2'><h3 className='font-bold pb-5 text-xl'>{content?.data[6].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
    {
        key: '7',
        label: '2023',
        children: <div className='flex md:flex-row justify-between items-center gap-10 '>
            <div className='md:w-1/2 w-full'><img  className='w-full h-[400px] object-cover object-top' src={content?.data[7]?.poster} alt="" /></div>
            <div className='md:w-1/2 w-full'><h3 className='font-bold pb-5 text-xl'>{content?.data[7].title}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>,
    },
];


    return ( < div className = 'my-20' ><h2 className='mb-5'>Pearls of Azerbaijani cinema</h2><Tabs defaultActiveKey="1" items={items} className='w-full'/></div> )
};

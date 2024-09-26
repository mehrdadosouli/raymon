import { useQuery } from '@tanstack/react-query'

function AboutUs() {
    return (
        <div className='flex md:flex-row-reverse flex-col justify-between items-center gap-10 my-20'>
            <div className='md:w-1/2 w-full'><img className='w-full h-[400px] object-cover object-top' src="../src/assets/r.png" alt="" /></div>
            <div className='md:w-1/2 w-full'><h3 className='font-bold pb-5 text-xl'>Aboute Us</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi accusantium in inventore incidunt expedita, nostrum perferendis natus temporibus sed quae, error maiores quo.</p></div>
        </div>
    )
}

export default AboutUs
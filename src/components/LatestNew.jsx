import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from './SkeletonLoader';
import ContentLoader from 'react-content-loader';
import { Skeleton } from 'antd';  

function LatestNew(props) {
    const { data: allMovies, isLoading } = useQuery({
        queryKey: ['GETPRODUCTS'],
    });
    return (<>
        {!isLoading ?
        <div className='flex md:flex-row justify-between items-center my-10 gap-10'>  
            <div className='md:w-1/2 w-full relative'>  
               <div className='bg-gray-300 animate-pulse rounded-md ' style={{ width: '100%', height: '50vh' }}>
            </div>

            </div>  
            <div className='md:w-1/2 w-full flex flex-col gap-5'>  
                {  
                    Array.from({ length: 4 }).map((_, index) => (  
                        <div className='flex gap-5 relative' key={index}>  
                           <div className='bg-gray-300 animate-pulse opacity-70 rounded-md' style={{ width: '7rem', height: '5rem' }}>  
                        </div>
                          <Skeleton.Input style={{ width: '35vw' }} active />  
                        </div>  
                    ))  
                }  
            </div>  
        </div>
            : <div className='flex md:flex-row justify-between items-center gap-10 my-10'>
                <div className='md:w-1/2 w-full relative'>
                    <img className='w-full h-[400px] object-cover object-top ' src={allMovies?.data[3]?.poster} alt="" />
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
                </div>
                <div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-5'>
                    {
                        allMovies?.data.slice(0, 4).map(item => (
                            <div className='flex gap-5 relative' key={item?.id}>
                                <div className='relative'>
                                    <img src={item?.poster} className='w-28 h-20' alt={item?.title} />
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos illo aut tempore officiis enim sequi.</p>
                            </div>
                        ))
                    }
                </div>
            </div>}

    </>
    )
}

export default LatestNew
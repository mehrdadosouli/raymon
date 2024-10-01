import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'antd';
import { getOneOfMovies } from '../services/getOneOfMovies';
import { useState } from 'react';

function LatestNew(props) {
    const [movieId, setMovieId] = useState(1);
    const { data: allMovies, isLoading: loadingAllMovies } = useQuery({ queryKey: ['GETPRODUCTS'] });
    const { data: oneMovie, isLoading: loadingOneMovie } = useQuery(
        { queryKey: ['GETONEMOVIE', movieId], queryFn: () => getOneOfMovies(movieId) }
    );

    return (
        <>
            {loadingAllMovies ? (
                // Loading state  
                <div className='flex md:flex-row justify-between items-center my-10 gap-10'>
                    <div className='md:w-1/2 w-full relative'>
                        <div className='bg-gray-300 animate-pulse rounded-md' style={{ width: '100%', height: '50vh' }}></div>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col gap-5'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div className='flex gap-5 relative' key={index}>
                                <div className='bg-gray-300 animate-pulse opacity-70 rounded-md' style={{ width: '7rem', height: '5rem' }}></div>
                                <Skeleton.Input style={{ width: '35vw' }} active />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Render data  
                <div className='flex md:flex-row justify-between items-center gap-10 my-10'>
                    <div className='md:w-1/2 w-full relative'>
                        {allMovies?.data[3] && (
                            <div className='relative'>
                                <img className='w-full h-[400px] object-cover object-top' src={allMovies.data[3].poster} alt="" />
                                <p className='absolute bottom-1/3 left-10 font-bold text-white z-50'>
                                    {oneMovie.title}
                                </p>
                                <p className='absolute bottom-10 left-10 text-white z-50'>
                                    {oneMovie.plot}
                                </p>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col gap-5'>
                        {allMovies?.data.slice(0, 4).map(item => (
                            <div className='flex gap-5 relative' key={item?.id} >
                                <div className='relative'>
                                    <img src={item?.poster} className='w-28 h-20' alt={item?.title} />
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                </div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default LatestNew;
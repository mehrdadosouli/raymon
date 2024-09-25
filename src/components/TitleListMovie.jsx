import { Link } from 'react-router-dom'
import { getAllProducts } from '../services/getAllProducts'
import { useQuery } from '@tanstack/react-query';
function TitleListMovie({ link, name }) {
    const { data: allMovies } = useQuery({ queryKey: ['GETPRODUCTS'], queryFn: () => getAllProducts() })
    return (
        <div className='flex justify-between items-center py-10 px-20'>
            <span>{name}</span>
            <div className='flex'>
                <Link to={link}>See More</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}

export default TitleListMovie
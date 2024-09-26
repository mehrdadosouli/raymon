import { Link } from 'react-router-dom'

function TitleListMovie({ link, name }) {
    return (
        <div className='flex justify-between items-center py-10'>
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
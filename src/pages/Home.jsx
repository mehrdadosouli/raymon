// import { Counter } from '../redux/features/counter/Counter'
// import { getAllProducts } from '../services/getAllProducts'

import SliderHomePage from "../components/SliderHomePage";

// import { useQuery } from '@tanstack/react-query';
export default function Home() {
    // const { data: allProducts } = useQuery({ queryKey: ['GETPRODUCTS'], queryFn: () => getAllProducts() })

    return (
        <>
            {/* <div className='w-full h-[100vh] bg-primary_skeleton'>

            </div> */}
            <SliderHomePage />
        </>
    )
}

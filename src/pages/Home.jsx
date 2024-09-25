import { useQuery } from "@tanstack/react-query";
import CarouselComponent from "../components/CarouselComponent";
import SliderHomePage from "../components/SliderHomePage";
import TitleListMovie from "../components/TitleListMovie";
import { space } from "postcss/lib/list";

export default function Home() {
    const { data: content } = useQuery({ queryKey: ['GETPRODUCTS'] })
    const contentStyle = {
        dots: false,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <>
            {/* <div className='w-full h-[100vh] bg-primary_skeleton'>

            </div> */}
            <SliderHomePage />
            <TitleListMovie link="/currently" name="Currently Playing" />
            <CarouselComponent contentStyle={contentStyle} content={content?.data} />
            <TitleListMovie link="/currently" name="Comming Soon" />
            <CarouselComponent contentStyle={contentStyle} content={content?.data} />
        </>
    )
}

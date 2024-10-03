import Slider from "react-slick";
import SkeletonLoader from "./SkeletonLoader";
function CarouselComponent({ contentStyle, content, isLoading }) {
  const loop = () => {
    return Array.from({ length: 5 }, (_, index) => (  
      <SkeletonLoader key={index} x="0" y="0" rx="0" ry="0" w="80%" h="100%" />  
  ));
  }

  return (
    <div className="slider-container">
      {
        isLoading ? <div className="flex">{loop()}</div>
          :

          <Slider {...contentStyle} >
            {content?.map(item =>
              <div className="pr-2 relative">
                <img src={item?.poster} alt={item?.title || 'Carousel Item'} className="filter brightness-75" />
                <div className="flex flex-col absolute bottom-5 left-5 text-white z-10">
                  <span>name : {item?.title}</span>
                  <span>year : {item?.year}</span>
                  <span>imdb_rating : {item?.imdb_rating}</span>
                  <div className="flex gap-1">
                    genres :  {
                      item?.genres?.map(gen => <span> {gen} </span>)
                    }
                  </div>
                </div>
              </div>)}
          </Slider>}
    </div>
  )
}

export default CarouselComponent

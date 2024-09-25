import Slider from "react-slick";
function CarouselComponent({ contentStyle, content }) {

  return (
    <div className="slider-container mx-16">
      <Slider {...contentStyle} >
        {content?.map(item => <div className="px-2 relative">
          <img src={item?.poster} alt={item?.title || 'Carousel Item'} className="filter brightness-75" />
          <div className="flex flex-col absolute bottom-5 left-5 text-white z-10">
            <span>name : {item?.title}</span>
            <span>year : {item?.year}</span>
            <span>imdb_rating : {item?.imdb_rating}</span>
            <div className="flex gap-1">
            genres :  {
              item?.genres?.map(gen => <span> { gen } </span>)
            }
            </div> 
          </div>
        </div>)}
      </Slider>
    </div>
  )
}

export default CarouselComponent

import ShowProducts from './ShowProducts'
import SlideSwiper from './SlideSwiper'
// import SlideSwiperConfig from './SlideSwiperConfig'
const OtherProduct = () => {
  return (
    <div className='m-auto w-3/4'>
      <SlideSwiper slides={ShowProducts} />
    </div>
  )
  // return (
  //   <div className='m-auto w-3/4'>
  //     <SlideSwiper slides={ShowProducts} SlideSwiperConfig={SlideSwiperConfig} />
  //   </div>
  // )
}

export default OtherProduct

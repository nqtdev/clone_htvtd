// @ Xem thêm các hình ảnh khác của sản phẩm
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import PropTypes from 'prop-types'
const SlideShowSwiper = ({slidesShow}) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {slidesShow.map((slidesShow, index) => (
          <SwiperSlide key={index}>
            <img className='block w-full lg:w-[35%] m-auto' src={slidesShow.slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
SlideShowSwiper.propTypes = {
  slidesShow: PropTypes.arrayOf(
    PropTypes.shape({
      slideContent: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default SlideShowSwiper

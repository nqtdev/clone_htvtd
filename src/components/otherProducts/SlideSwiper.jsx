import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const SlideSwiper = ({slides, swiperConfig}) => {
  return (
    <>
      <div>
        <h2 className='base_title'>Các sản phẩm khác</h2>
      </div>
      <div>
        <Swiper
          {...swiperConfig}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <NavLink to={slide.linkProduct}>
                <div className='rounded-lg border-2 bg-main-table/20 mx-4 overflow-hidden'>
                  <div>
                    <img
                      className='m-auto w-3/4 h-auto relative z-0 transition-all duration-300 hover:scale-110'
                      src={slide.slideContent}
                      alt={slide.slideName}
                    />
                  </div>
                  <div className='box bg-white p-2'>
                    <h4 className='text-base font-roboto text-blue-500'>{slide.slideName}</h4>
                    <span className='font-roboto text-sm text-gray-600/50'>
                      {slide.slideDescription}
                    </span>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

SlideSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      slideContent: PropTypes.string.isRequired, // Hình ảnh
      slideName: PropTypes.string.isRequired, // Tên sản phẩm
      slideDescription: PropTypes.string.isRequired, // Mô tả sản phẩm
      linkProduct: PropTypes.string.isRequired, // Đường dẫn đến page chi tiết sản phẩm
    }),
  ).isRequired,
  swiperConfig: PropTypes.shape({
    spaceBetween: PropTypes.number,
    pagination: PropTypes.object,
    freeMode: PropTypes.bool,
    breakpoints: PropTypes.object,
  }),
}

SlideSwiper.defaultProps = {
  swiperConfig: {},
  slides: [], // Đảm bảo slides mặc định là mảng rỗng
}

export default SlideSwiper

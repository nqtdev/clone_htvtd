import Banner from 'assets/homePage/banner.webp'
import 'aos/dist/aos.css'
const PosterPage = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <p className='m-2 text-left text-[5rem] font-bold text-main-colors animate-fade-up animate-one animate-duration-[2000ms] animate-ease-in-out'>
          Phát triển doanh nghiệp của bạn với HTVTD
        </p>
        <span className='m-3 text-lg text-main-colors  font-roboto animate-fade-up animate-one animate-duration-[1500ms] animate-ease-in-out'>
          Đề xuất bán hàng của công ty và dịch vụ của chúng tôi
        </span>
        <button className='bg-black rounded-xl animate-fade-up animate-one animate-duration-[1000ms] animate-ease-in-out mt-3'>
          <p className='p-6 font-roboto text-white'>
            Giúp công ty của bạn vươn tới những tầm cao lớn hơn
          </p>
        </button>
      </div>
      <div className='col-span-1'>
        <img className='w-fit' src={Banner} alt='logo banner' />
      </div>
    </div>
  )
}

export default PosterPage

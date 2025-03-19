import LogoHtcSw from '/favicon/1.png'
import imgBcta from 'assets/logo/bct_notion.webp'
import imgBctb from 'assets/logo/bct_sub.webp'
const LayoutFooter = () => {
  return (
    <footer className='mt-16 flex justify-center bg-main-bgcolors'>
      <div className='m-4 mt-16 xl:w-10/12'>
        <div className='grid gap-2 md:grid-cols-3'>
          <section className=''>
            <p className='text-sm text-[#a1a5ba]'>Sản phẩm thuộc hệ sinh thái</p>
            <img className='w-14' src={LogoHtcSw} alt='logo_htcgroup' />
            <div className='xl:mb-3'>
              <div className='mt-2 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  />
                </svg>
                <a className='ml-3 text-white'>kinhdoanh@htvtd.vn</a>
              </div>
              <div className='mt-2 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                  />
                </svg>
                <p className='ml-3 text-white'>Mã Số Doanh Nghiệp: 0109096821 </p>
              </div>
              <div className='flex mt-2 w-3/4 items-center'>
                <div className='w-full'>
                  <img className='w-4/5' src={imgBcta} alt='' />
                </div>
                <div className='w-full'>
                  <img className='w-4/5' src={imgBctb} alt='' />
                </div>
              </div>
            </div>
          </section>
          <section className='col-span-2'>
            <div className='mb-10 text-center'>
              <span className='style-address text-2xl'>
                CÔNG TY CỔ PHẦN VIỄN THÔNG QUỐC TẾ THÁI BÌNH DƯƠNG{' '}
              </span>
            </div>
            <div className='mb-4'>
              <h4 className='style-address'>văn phòng giao dịch</h4>
              <div className='flex'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                </div>
                <span className='text-white'>
                  Số 132 Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội, Việt
                  Nam
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className='pt-2'>
          <h2 className='text-center font-mulish text-[.8rem] text-[#a1a5ba]'>
            Copyright © 2023 HTVTD
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter

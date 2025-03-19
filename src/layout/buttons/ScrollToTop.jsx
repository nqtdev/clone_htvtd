// @ Nút chức năng cuộn lên đầu trang
import {useEffect, useState} from 'react'
import Scroll from 'assets/icon_buttons/scrollToTop.webp'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='button_scroll animate-fade-up animate-infinite animate-duration-[3000ms]'>
      {isVisible && (
        <img onClick={scrollToTop} className='w-[70%] xl:w-[80%]' src={Scroll} alt='' />
      )}
    </div>
  )
}

export default ScrollToTop

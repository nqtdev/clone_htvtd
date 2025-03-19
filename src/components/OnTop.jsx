// @ Khi chuyển trang mới sẽ tự động cuộn lên đầu trang
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OnTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default OnTop

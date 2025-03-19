import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'

import IdPassPage from 'pages/IdPass'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IdPassPage />,
      },
    ],
  },
  {
    path: '*', // Sử dụng '*' để xử lý tất cả các đường dẫn không hợp lệ
    element: <ErrorPage />,
  },
])

export default Routers

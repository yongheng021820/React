import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))
const NoteFond = React.lazy(() => import('@/views/noteFond/NoteFond'))
const routes = [
  {
    path: '/',
    // element 首字母一定是小写
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '*',
    element: <NoteFond />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes
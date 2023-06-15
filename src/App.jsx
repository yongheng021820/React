import React, { memo } from 'react'
// import './assets/css/index.less'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './route'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <div className='page'>
        {/* <Routes></Routes> */}
        {useRoutes(routes)}
      </div>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
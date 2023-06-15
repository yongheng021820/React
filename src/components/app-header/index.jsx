import React, { memo } from 'react'

import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/heder-right'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <div className='app-header'>
      <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </HeaderWrapper>
    </div>
  )
})

export default AppHeader
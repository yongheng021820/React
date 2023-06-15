import React, { memo, useEffect, useState } from 'react'
import RightWrapper from './style.js'
import IconGlobal from "@/assets/svg/icon-global"
import IconProfileMenu from '@/assets/svg/icon-profile-menu.jsx'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar.jsx'

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [isShow, setIsShow] = useState(false)

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setIsShow(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  //事件处理函数 
  function itme_click() {
    setIsShow(true)
  }

  return (
    <RightWrapper>
      <div className='header-right'>
        <div className="item">登录</div>
        <div className="item">注册</div>
        <div className="item"><IconGlobal></IconGlobal></div>
        <div className='item item-pofile' onClick={itme_click}>
          <div className='profile-child'><IconProfileMenu /></div>
          <div className='profile-child'>
            <IconProfileAvatar />
          </div>
          {isShow && (
            <div className='profile_hidden'>
              <div className="hidden_item">注册</div>
              <div className="hidden_item">登录</div>
              <div className="profile_hidden_line"></div>
              <div className="hidden_item">来爱彼迎发布房源</div>
              <div className="hidden_item">开展体验</div>
              <div className="hidden_item">帮助</div>
            </div>
          )}

          {/* <div className='profile_hidden'>
            <div className="hidden_item">注册</div>
            <div className="hidden_item">登录</div>
            <div className="profile_hidden_line"></div>
            <div className="hidden_item">来爱彼迎发布房源</div>
            <div className="hidden_item">开展体验</div>
            <div className="hidden_item">帮助</div>
          </div> */}


        </div>
      </div>
    </RightWrapper>

  )
})

export default HeaderRight
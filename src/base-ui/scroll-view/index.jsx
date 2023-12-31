// import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/img/svg/icon-arrow-left'
import IconArrowRight from '@/assets/img/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import ViewWrapper from './style'

const ScrollView = memo((props) => {
  // console.log("props.children:", props.children)
  /*定义内部的状态*/
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()
  /* 组件渲染完毕，判断是否显示右侧按钮*/
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    // console.log(scrollWidth, clientWidth)
    setShowRight(totalDistance > 0)
  }, [props.children])

  /*事件处理*/
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newE1 = scrollContentRef.current.children[newIndex]
    // console.log(newE1.offsetLeft);
    const newOffsetLeft = newE1.off
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from "./style"

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()
  // console.log('inde', selectIndex);

  useEffect(() => {
    // EL.offsetLeft + EL.width * 0.5 - indicatore.width * 0.5
    // 1、获取selectIndex对应的item
    const selectItmeEl = contentRef?.current?.children[selectIndex]
    const itemOffsetLeft = selectItmeEl?.offsetLeft
    // console.log('selectItmeEl', typeof (selectItmeEl));
    const itemWidth = selectItmeEl?.clientWidth
    // 2、content的宽度
    const contentWidth = contentRef?.current?.clientWidth
    const contentScroll = contentRef?.current?.scrollWidth
    // 3、获取sekectIndex要滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4、特殊情况的处理
    if (distance < 0) distance = 0  //左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance //右边的特殊情况处理
    // console.log(distance);
    // 5、改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`
  },[selectIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
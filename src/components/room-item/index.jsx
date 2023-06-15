import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import RoomSwrapper from "./style"

import { Rate } from 'antd';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/img/svg/icon-arrow-left';
import IconArrowRight from '@/assets/img/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';



const RoomItem = memo((props) => {
  const { itemData, itemWith = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  const handBtnClick = (isRight = true) => {
    // 上一个面板/下一个面板
    isRight ? sliderRef.current?.next() : sliderRef.current?.prev()

    // 最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  const handleItemClick = (e) => {
    // console.log(itemData);
    if (itemClick) itemClick(itemData)
  }

  const swiper_data = (<div className="swiper">
    <div className="control">
      <div className="btn left"
        onClick={e => handBtnClick(0)}>
        <IconArrowLeft
          width='30'
          height='30'
        >
        </IconArrowLeft>
      </div>
      <div className="btn right"
        onClick={e => handBtnClick(1)}>
        <IconArrowRight
          width={30}
          height={30}>
        </IconArrowRight>
      </div>
    </div>
    <div className='indicator'>
      <Indicator selectIndex={selectIndex}>
        {
          itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item} >
                <div className={classNames("dot", { active: selectIndex === index })}></div>
              </div>
            )
          })
        }
      </Indicator>
    </div >

    <Carousel dots={false} ref={sliderRef} autoplay={false}>
      {
        (itemData?.picture_urls?.map((item, index) => {
          return (
            <div className='cover' key={item}>

              <img src={item} alt="" />
            </div>
          )
        }))

      }
    </Carousel>
  </div >)

  const url_data = (<div className="cover">
    <img src={itemData?.picture_url} className='img' alt="" />
  </div>)
  return (
    <RoomSwrapper
      verifyColor={itemData?.verify_info.text_color || "#39576a"}
      itemWith={itemWith}
      onClick={e => handleItemClick(itemData)}
    >
      <div className='inner'>
        {itemData.picture_urls ? swiper_data : url_data}
        <div className='desc'>
          {itemData?.verify_info?.messages.join('.')}
        </div>
        <div className='name '>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom_info'>
          {/* antd rate */}
          <span className='rate'>
            <Rate defaultValue={itemData.star_rating ?? 4} size="small" />
          </span>
          <span>
            {itemData.reviews_count}
          </span>
          <span>
            {itemData?.bottom_info?.content}
          </span>
        </div>
      </div>
    </RoomSwrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWith: PropTypes.string
}

export default RoomItem
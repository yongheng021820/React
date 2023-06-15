import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from "./style"

const LongForItem = memo((props) => {
  const { infoData } = props

  return (
    <LongForItemWrapper>
      <div className='inner'>
        <img src={infoData.picture_url} className='cover' alt="" />
        <div className='bg-cover'></div>
        <div className='info'>
          <div className="city">{infoData.city}</div>
          <div className="price">均价 {infoData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  infoData: PropTypes.object
}

export default LongForItem
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailInfoWrapper } from "./style"

const DetailInfo = memo((props) => {
  return (
    <DetailInfoWrapper>
      <div>DetailInfo</div>
    </DetailInfoWrapper>
  )
})

DetailInfo.propTypes = {}

export default DetailInfo
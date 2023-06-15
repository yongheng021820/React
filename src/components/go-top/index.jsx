import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { GoTopSwipper } from "./styles"

const GoTop = memo((props) => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <GoTopSwipper onClick={e => { handleClick() }}>
      GoTop
    </GoTopSwipper>

  )
})

GoTop.propTypes = {}

export default GoTop
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderSwrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle = "默认子标题" } = props
  return (
    <SectionHeaderSwrapper>
      <h2 className='title'>{title}</h2>
      <div className='subtitle'>{subtitle}</div>
    </SectionHeaderSwrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtite: PropTypes.string
}

export default SectionHeader
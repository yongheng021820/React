import IconMoreArrow from '@/assets/img/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import SctionFooterWrapper from "./style"

const SectionFooter = memo((props) => {
  const { title, hdC1 } = props
  let showMessage = '显示全部'
  if (title) {
    showMessage = `显示更多${title}房源`
  }

  const navicate = useNavigate()

  function handleClick() {
    console.log('handleClickhandleClick');
    navicate('/entire')
    //hdC1()
  }
  return (
    <SctionFooterWrapper color={title ? '#00848A' : '#000'}>
      <div className='section-footer-conter' onClick={e => handleClick()}>
        <span className='text'>{showMessage}</span>
        <span>
          <IconMoreArrow />
        </span>
      </div>
    </SctionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  title: PropTypes.string
}

export default SectionFooter
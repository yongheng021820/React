import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HomeLongforWrapper from "./style"


const HomeLongfor = memo((props) => {
  const { longforInfo } = props

  return (
    <HomeLongforWrapper>
      <SectionHeader
        title={longforInfo.title}
        subtitle={longforInfo.subtitle}
      >
      </SectionHeader>
      <div className='longfor-list'>
        {
          longforInfo.list.map((item, index) => {
            return <LongForItem infoData={item} key={index}></LongForItem>
          })
        }
      </div>
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  longforInfo: PropTypes.object
}

export default HomeLongfor
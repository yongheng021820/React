import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HomeSectionWrapper from "./style"
import SectionHeader from '@/components/section-header'
import SectionRooms from "@/components/section-rooms"

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionWrapper>
      <div className="good-price">
        <SectionHeader
          title={infoData?.title}
          subtitle={infoData?.subtitle}>
        </SectionHeader>
        <SectionRooms roomList={infoData?.list} />
      </div >
    </HomeSectionWrapper>

  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
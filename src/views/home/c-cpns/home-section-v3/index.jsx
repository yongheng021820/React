import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  const handleClick = () => {
    console.log('clickDil');
  }
  const hdC = () => {
    console.log('HDC');
  }
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className="root-list">
        <ScrollView >
          {
            infoData?.list?.map((item, index) => {
              return <RoomItem
                itemData={item}
                itemWidth='20%'
                key={item.id}
              />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter title='plus' hdC1={hdC} />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3
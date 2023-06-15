import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import SectionTabsWrapper from "./style"

const SectionTabs = memo((props) => {
  const { tabTitles, tabClickHanle } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function tabClick(index, name) {
    // console.log(index, name);
    setCurrentIndex(index, name)
    tabClickHanle(index, name)
  }
  return (
    <SectionTabsWrapper>
      {/* <div className='tabTitles'> */}
      <ScrollView>
        {tabTitles?.map((item, index) => {
          return <div
            key={index}
            className={classNames('tabs', { active: index === currentIndex })}
            onClick={e => tabClick(index, item)}
          >{item}</div>
        })}
      </ScrollView>
      {/* </div> */}
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabTitles: PropTypes.array
}

export default SectionTabs
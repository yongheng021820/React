import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import HomeSectionV2Wrapper from "./style"
import SectionHeader from "@/components/section-header"
import SectionTabs from "@/components/section-tabs"
import SectionRooms from "@/components/section-rooms"
import SectionFooter from '@/components/section-footer'


// import { shallowEqual, useSelector } from 'react-redux'

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const { disCountData = [] } = props
  console.log(disCountData);

  // 自定义数据
  const tabTitles = disCountData.dest_address?.map((item) => item.name)
  const initName = Object.keys(disCountData.dest_list)[0]
  const [name, setName] = useState(initName)

  // 事件处理
  const tabClickHanle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      < div className='discount'>
        <SectionHeader title={disCountData.title}
          subtitle={disCountData.subtitle} />
        {/* 顶部tabs  */}
        <SectionTabs tabTitles={tabTitles} tabClickHanle={tabClickHanle} />
      </div>
      <SectionRooms
        roomList={disCountData.dest_list?.[name]}
        itemWith='33.33%'
      />
      <SectionFooter title={name}></SectionFooter>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  disCountData: PropTypes.object
}

export default HomeSectionV2
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { Pagination } from 'antd'
import { EntirePagenationWrapper } from "./style"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentAction, fetchRoomListAction } from '@/store/entire/createAction'

const EntirePagenation = memo((props) => {
  // const [defaultCurrent, setdDefaultCurrent] = useState(1)
  const { totalCount, currentPage, roomList, isLoading } =
    useSelector(state => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading
    }), shallowEqual)
  // console.log(currentPage);
  const dispatch = useDispatch()
  const onShowSizeChange = (current, pageSize) => {
    // console.log(current, pageSize);
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新页码
    dispatch(changeCurrentAction(current - 1))
    dispatch(fetchRoomListAction())
  };


  // const totalPage = Math.ceil(totalCount / 20) //305  283
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  return (
    <EntirePagenationWrapper>
      <div className='info'>
        {
          !!roomList && <Pagination
            showSizeChanger
            // onShowSizeChange={onShowSizeChange()}
            // defaultCurrent={1}
            current={currentPage + 1}
            total={totalCount}
            onChange={onShowSizeChange}
          />
        }
        <div className='desc'>
          第{startCount}-{endCount}个房源，共超过{totalCount}个
        </div>
      </div>
      {isLoading && <div className="cover"></div>}
      {/* <div className="cover"></div> */}
    </EntirePagenationWrapper>
  )
})

EntirePagenation.propTypes = {}

export default EntirePagenation
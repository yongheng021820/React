
import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { EntireRoomsWrapper } from "./style"
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/detail'

const EntireRooms = memo((props) => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }), shallowEqual)
  // const { roomList } = useSelector((state) => {
  //   return ({ roomList: state.entire.roomList })
  // })
  // console.log(roomList);

  // const { roomList } = useSelector(function (state) {
  //   return { roomList: state.entire.roomlist }
  // })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    // console.log(item);
    // navigate('/detail')
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList?.map((item, index) => {
            return (<RoomItem
              itemData={item}
              itemWith='20%'
              key={item._id}
              itemClick={itemClickHandle}
            ></RoomItem>)
          })
        }
      </div>
    </EntireRoomsWrapper>

  )
})

EntireRooms.propTypes = {}

export default EntireRooms
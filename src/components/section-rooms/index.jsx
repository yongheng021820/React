import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from "../room-item/index"

import SectionRoomsWrapper from './style'

const SectionRooms = memo((props) => {
  const { roomList, itemWith } = props

  return (
    <SectionRoomsWrapper>
      <div className='room_list'>
        {
          roomList?.slice(0, 8).map((item) => {
            console.log("SectionRooms", item);
            return <RoomItem itemData={item}
              key={item.id}
              itemWith={itemWith}
            ></RoomItem>
          })
        }
      </div>
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { EntireFilterWrapper } from "./style"
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/entire/createAction'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])
  const handleItemClick = (item, index) => {
    // console.log(item, index);
    let newItems = [...selectItems]
    if (!newItems.includes(item)) {
      newItems.push(item)
    }
    else { newItems = newItems.filter(e => e !== item) }

    // else {
    //   const itemIndex = newItems.findIndex(e => e === item)
    //   newItems.splice(itemIndex, 1)
    // }

    setSelectItems(newItems)
  }

  // useEffect(() => {
  //   getEntireRoomList(0).then(res => {
  //     console.log(res);
  //   })
  // }, [])

  const dispact = useDispatch()
  useEffect(() => {
    dispact(fetchRoomListAction())
  }, [dispact])

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div className={classNames('item', { active: selectItems.includes(item) })}
              key={item}
              onClick={e => handleItemClick(item)}
            >
              {item}
            </div>)
        })}
      </div>
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagenation from './c-cpns/entire-pagenation'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagenation></EntirePagenation>
    </EntireWrapper>
  )
})

export default Entire
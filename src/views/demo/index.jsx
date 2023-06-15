import React, { memo, useState } from 'react'
import { DemoSwiper } from "./style"
import Indicator from '@/base-ui/indicator'

const Demo = memo(() => {
  const names = ["232xadsa", "zs12", "ada132", "123123", "dvsfd", "degs", "afetg", "sdfsdfs"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleBtnclik = (isTrue) => {
    let newIndex = isTrue ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    // console.log("new:", newIndex);
  }

  return (
    <DemoSwiper>
      <div className='control'>
        <button onClick={e => handleBtnclik(false)}>上一个</button>
        <button onClick={e => handleBtnclik(true)}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectIndex={currentIndex}>
          {names.map(item => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoSwiper>

  )
})

export default Demo
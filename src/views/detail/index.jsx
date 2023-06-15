import { useSelector } from 'react-redux'
import React, { memo } from 'react'
import { DetailWrapper } from "./style"
import DetailPicture from './c-cpns/detail-pictures/DetailPicture'
import DetailInfo from './c-cpns/detail-infos/DetailInfo'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  console.log(detailInfo);
  return (
    <DetailWrapper>
      {/* {detailInfo.name} */}
      <DetailPicture></DetailPicture>
      <DetailInfo></DetailInfo>
    </DetailWrapper>
  )
})

export default Detail
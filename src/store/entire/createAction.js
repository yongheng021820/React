import { getEntireRoomList } from "@/service/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage: currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = () => {
  // retur 新函数
  return async (dispatch, getState) => {
    //  1、根据页码获取最新的数据
    // 请求数据前显示蒙版
    dispatch(changeIsLoadingAction(true))

    const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)
    // 请求数据后隐藏蒙版
    dispatch(changeIsLoadingAction(false))
    // setTimeout(() => {
    //   console.log("数据请求");
    //   dispatch(changeIsLoadingAction(false))
    // }, 5000);

    // console.log(res);
    //2、获取到最新的数据，保存到redux的store中
    const roomList = res.list
    // console.log(roomList);
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}



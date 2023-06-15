import * as actionTypes from "./constants"

const initalState = {
  currentPage: 0,//当前页码
  roomList: [],//房间列表
  totalCount: 0,//总数据个数
  isLoading: false //
}

function reducer(state = initalState, actions) {
  switch (actions.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: actions.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: actions.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: actions.totalCount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: actions.isLoading }
    default:
      return state
  }
}

export default reducer

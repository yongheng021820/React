import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDisCountData,
  getHomeRecommendData,
  getHomeLongforData,
  getHomePluseData
} from "@/service/modules/home"

export const fetchHomeDataAction =
  createAsyncThunk('fetchData', (payload, { dispatch }) => {
    // 初始方式，缺点是处理多个网络请求比较麻烦
    // const res = await getHomeGoodPriceData()
    // return res
    // getHomeGoodPriceData().then(res => {
    //   console.log('store_home', res);
    // }).catch(err => {
    //   console.log(err);
    // })
    getHomeGoodPriceData().then(res => {
      // actions 必须导出，否则提示找不到
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDisCountData().then(res => {
      dispatch(changeDisCountDataAction(res))
    })
    getHomeRecommendData().then(res => {
      dispatch(changeRecommendDataAction(res))
    })
    getHomeLongforData().then(res => {
      dispatch(changeLongForInfoAction(res))
    })
    getHomePluseData().then(res => {
      dispatch(changePluseInfoAction(res))
    })
  })

const homeSice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountData: {},
    recommendData: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDisCountDataAction(state, { payload }) {
      state.disCountData = payload
    },
    changeRecommendDataAction(state, { payload }) {
      state.recommendData = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePluseInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDisCountDataAction,
  changeRecommendDataAction,
  changeLongForInfoAction,
  changePluseInfoAction,
} = homeSice.actions
export default homeSice.reducer

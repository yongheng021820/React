import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/service'
import HomeSwrapper from "./style"
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'

import { isEmpytObj } from "@/utils/isEmptyObject"
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import GoTop from '@/components/go-top'
// import GoTop from "@/vie"
const Home = memo(() => {
  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('aaaaa'))
  }, [dispatch])

  //从redux中获取数据
  const { goodPriceInfo = [] } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)


  // console.log(goodPriceInfo?.list);
  // 从store获取数据
  const { highScoreInfo, disCountData, recommendData, longforInfo,
    plusInfo } =
    useSelector((state) => ({
      highScoreInfo: state.home.highScoreInfo,
      disCountData: state.home.disCountData,
      recommendData: state.home.recommendData,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }), shallowEqual)
  console.log(highScoreInfo, disCountData);
  console.log(plusInfo);
  // console.log(tabTitles);
  // 定义状态
  const [highScore, setHighScore] = useState({})
  // 网络请求
  useEffect(() => {
    hyRequest.get({ url: '/home/highscore' }).then(
      res => {
        // console.log(res);
        setHighScore(res)
      }
    ).catch(err => {
      console.log(err);
    })
  }, [])
  // function setValue() { }

  // 数据处理
  // const [name, setName] = useState('佛山')
  // const tabTitles = disCountData.dest_address?.map((item) => item.name)
  // const tabClickHanle = useCallback(function (index, name) {
  //   setName(name)
  // }, [])
  return (
    <HomeSwrapper>
      <HomeBanner />
      <div className="contentp-wrap">
        {/* 折扣数据 */}{/* 顶部tabs */}
        {/* < div className='discount'>
          <SectionHeader title={disCountData.title}
            subtitle={disCountData.subtitle} />
          
          <SectionTabs tabTitles={tabTitles} tabClickHanle={tabClickHanle} />
        </div>
        <SectionRooms
          roomList={disCountData.dest_list?.[name]}
          itemWith='33.33%'
        /> */}


        {isEmpytObj(disCountData) && <HomeSectionV2 disCountData={disCountData} />}
        {isEmpytObj(recommendData) && <HomeSectionV2 disCountData={recommendData} />}
        {isEmpytObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmpytObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmpytObj(longforInfo) && <HomeLongfor longforInfo={longforInfo} />}
        {isEmpytObj(plusInfo) && <HomeSectionV1 infoData={plusInfo} />}
        <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
      </div>


      {/* <div className="content">content</div>
      <div>home：{highScore.title}</div>
      <div> */}
      {/* 当highScore为空时，请求数据报错如下，
        解决办法1、逻辑与 */}
      {/* react-dom.development.js:26923 Uncaught TypeError: Cannot read properties of undefined (reading 'create') */}

      {/* 解决highScore为空时 方法一  */}
      {/* {
          highScore.list && <ul>
            {
              highScore.list.map((item) => {
                return <li key={item.id}>{item.name}</li>
              })
            }
          </ul>
        } */}

      {/* 解决highScore为空时 方法二，可选链 */}

      {/* {
            highScore?.list?.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })
          } */}
      {/* </div> */}
      <GoTop></GoTop>
    </HomeSwrapper >
  )
})

export default Home

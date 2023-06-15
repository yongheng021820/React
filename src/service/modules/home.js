import hyRequest from "../request";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDisCountData() {
  return hyRequest.get({
    url: '/home/discount'
  })
}

export function getHomeRecommendData() {
  return hyRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongforData() {
  return hyRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePluseData() {
  return hyRequest.get({
    url: '/home/plus'
  })
}
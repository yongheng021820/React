import styled from "styled-components";

const RoomSwrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemWith};
  box-sizing: border-box;
  padding: 8px;
  /* margin-top: 10px; */
  .inner{
    /* background-color: red; */
    position:relative;
    margin-bottom: 30px;
    /* height: 340px; */
    .swiper {
      position: relative;
      cursor: pointer;
      &:hover {
        .control {
          display: flex;
        }
      }
      .control {
        display: none;
        
        .btn {
          position: absolute;
          display: flex;
          color: white;
          width: 30px;
          height:100%;
          /* background-color: red; */
          z-index: 99;
          /* margin: 30px 5px; */
          text-align: center;
          align-items:center;
          /* top: 50%; */
          /* transform: translateY(-110%); */
          background: linear-gradient(to left,transparent 0%,rgba(0,0,0,.25) 100%);
          &.right{
            background: linear-gradient(to right,transparent 0%,rgba(0,0,0,.25) 100%);
          }
        }
        .left {
          left: 0;
          /* .row {
            top: 50%;
          transform: translateY(-110%);
        } */
          }
        
        .right {
          right: 0;
          /* top: 50%;
          transform: translateY(-50%); */
        }
      }
      .indicator {
        position: absolute;
        bottom: 20px;
        
        /* overflow: hidden; */
        width: 30%;
        left: 0;
        right: 0;
        margin: 0 auto;
        color: white;
        z-index: 99;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          /* width: 8px; */
          width: 14.29%;
          
          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
           
            &.active {
              width: 8px;
              height: 8px;
              /* background-color: red; */
            }
          }
        }
      }
    }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color:${props => props.verifyColor};
    }
    .name{
      font-weight:600;
      margin:8px 0;

      display: -webkit-box;  
      word-break: break-all;  
      -webkit-box-orient: vertical; 
      overflow: hidden;  
      text-overflow: ellipsis; 
      -webkit-line-clamp: 2; //需要显示的行数  
      }
    .bottom_info {
      position:absolute;
      bottom: -26px;
      font-size: 10px;
      span {
        margin: 0 3px;
      }
      .rate {
        /* position: absolute; */

        ul { 
          font-size:10px;
          margin-left:0;
          li {
            margin: 0 -1px;
          }
        }
      }
    }
  
  .inner .cover{
    /* img{width:100%} */
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0 0 ;
    overflow: hidden;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height:100%;
    }

    /* box-sizing:border-box;
    position:relative;
    border-radius:3px;
    padding:66.66% 8px 0; //解决因返回的图片长度不一致的问题
    //高度是宽度的2/3
    img{
      overflow:hidden;
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
    } */
  }
`
export default RoomSwrapper
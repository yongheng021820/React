import styled from "styled-components";

const RightWrapper = styled.div`
  flex:  1;
  display: flex;
  justify-content: flex-end;/* 元素靠右 */

  .header-right {
    display:flex;
    justify-content: center;  /* 水平居中 */
    align-items:center; /* 垂直居中 */
    font-size: 14px;
    font-weight:600;
    margin-right:14px;
    cursor: pointer;
    .item {
      margin: 3px 10px;
    }
  }
  .item-pofile {
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 40px;
    z-index: 199;
    /* transition 设置阴影动画 */
    /* transition: box-shadow 200ms ease; */
    /* & 代表当前元素item-pofile */
    /* &:hover{box-shadow: 0 1px 1px 1px rgba(221,221,221,.6)}; */
    ${props => props.theme.mixin.boxShadow}
    .profile-child {
      margin: 4px 2px 2px 8px;
      /* margin: 4px; */
    }
    .profile_hidden {
      display: none;
      display: block;
      position: absolute;
      width: 220px;
      top: 50px;
      right:15px;
      /* margin: 25px 0; */
      background-color:rgba(255,255,255);
      /* background-color:rgba(229,229,229); */
      font-weight:400;
      font-size: 14px;
      border:1px solid rgba(245,245,245);
      border-radius: 10px;
      div:hover{background-color: rgba(247,247,247)};
      div:first-child {
        font-weight: 600;
      }
      .hidden_item {
        /* width: 100%; */
        padding: 10px 30px 10px 20px;
        margin: 10px 0;
      }
      .profile_hidden_line {
        width: 100%;
        border: 0.01px solid rgba(226,226,226);
      }
    }
  }
`
export default RightWrapper

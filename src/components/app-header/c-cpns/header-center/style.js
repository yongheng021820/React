import styled from "styled-components";
const CenterWrapper = styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  width: 240px;
  font-size: 12px;
  border: 1px solid rgba(221,221,221);
  border-radius: 30px;
  .text input {
    border: 0;
    outline: none;
    margin: 5px;
  }
  .serarch-icon {
    display: flex;
    align-items:center;
    justify-content:center;
    
    position: relative;
    right: -15px;

    width: 30px;
    height:30px;
    border-radius: 50%;
    
    color:rgba(255,255,255);
    background-color: rgba(255,72,92);
    margin: 5px 0;
  }
  /* 给搜索框添加阴影 */
  ${props => props.theme.mixin.boxShadow}
`

export default CenterWrapper




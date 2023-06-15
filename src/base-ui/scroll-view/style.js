import styled from "styled-components";

const ViewWrapper = styled.div`
position: relative;
padding: 8px 0;
.scroll {
  overflow: hidden;
  .scroll-content {
  display: flex;
  transition:transform 250ms ease;
  }
}
.control {
  position:relative;
  z-index:9;
  display: flex;
  justify-content: center;
  align-items:center;
  width:28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: #fff;
  background: 0px 1px 1px 1px rgba(0,0,0,.14);
  cursor: pointer;

  &.left {
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  &.right {
    position: absolute;
    background-color: #fff;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
}


  
`

export default ViewWrapper
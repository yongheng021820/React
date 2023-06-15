import styled from "styled-components";
const LeftWrapper = styled.div`
  flex:1;
  /* text-align: left; */
  display: flex; 
  .logo {
    display:flex;
    align-items:center;
    justify-content: center;
    margin-left:20px;
    .logo-icon {
      margin:0 10px;
      padding:5px;
      cursor: pointer;
    }
    .logo-jpg img {
      width: 50%;
    }
  }
  color: var(--primary-color)
`
export default LeftWrapper
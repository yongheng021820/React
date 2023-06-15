import styled from "styled-components";

const SectionTabsWrapper = styled.div`
  /* .tabTitles{ */
    
    .tabs{
      box-sizing: border-box;
      padding:10px 20px;
      /* background-color: #00788B; */
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      white-space:nowrap;
      cursor: pointer;
      &:last-child{
        margin-right: 0;
      }
    }
    .active {
        background-color:#00788B;
        color:white;
      }
    
  /* } */
`
export default SectionTabsWrapper
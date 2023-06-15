import styled from "styled-components";

export const EntirePagenationWrapper = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 20px;
  .info {
    .ant-pagination-prev {
      font-size: 30px;
    }
    .ant-pagination-item-active{
        /* background-color: red; */
    }
    .desc {
      text-align: center;
      margin-top: 10px;
    }
  }

  > .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`


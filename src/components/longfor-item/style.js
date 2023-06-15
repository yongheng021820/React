import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  /* border-radius: 8px; */
  .inner {
    position: relative;
    padding: 8px;
    text-align: center;
    .cover {
      width: 100%;
    }
    .bg-cover {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgb(0,0,0) 100%);
    }
    .info {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);

      color: #fff;
      /* top: 0; */
    }
    padding: 8px;
    margin-left: -8px;
  }

`

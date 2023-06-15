import styled from "styled-components";

const SectionRoomsWrapper = styled.div`
  .room_list {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    //RoomItem组件设置padding，
    // 造成list左右两边有多余空间，采用负margin解决 
  }
`
export default SectionRoomsWrapper

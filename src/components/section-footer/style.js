import styled from "styled-components";

const SctionFooterWrapper = styled.div`

display: flex;
.section-footer-conter{
  display: flex;
  align-items:center;
  cursor: pointer;
  color:${props => props.color};
  &:hover {text-decoration:underline}
}

  margin-top: 20px;
  .text {
    font-size: 17px;
    font-weight:700;
    margin-right:4px;
  }
`
export default SctionFooterWrapper
import styled from "styled-components";

const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  svg {
    path {
      transition: 0.1s;
    }

    &:hover path {
      d: path("M 800 300 Q 400 250 0 300 L 0 0 L 800 0 L 800 300 Z");
    }
  }
`;

const AppMainWrapper = styled.div`
  background: linear-gradient(to bottom, #ffffff 0%, #dddee1 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10vh 0 80vh;
  position: relative;
  text-align: center;
  overflow: hidden;

  display: flex;

  &::after {
    border-right: 2px dashed #eee;
    content: "";
    position: absolute;
    top: calc(10vh + 1.618em);
    bottom: 0;
    left: 50%;
    width: 2px;
    height: 100%;
  }
`;
export { SvgWrapper, AppMainWrapper };

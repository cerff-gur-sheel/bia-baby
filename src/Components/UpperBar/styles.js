import styled from "styled-components";
import { colors } from "../../styles/styles";

export const Container = styled.View`
  top: 2;
  position: absolute;
  width: 100%;
  height: 64px;
  background-color: ${colors.upperBar.background};
  z-index: 999;
`;

export const Content = styled.View`
    flex: 1;
    margin-top: 8px;
    width: 96%;
    align-self: center;
    justify-self: center;
`;

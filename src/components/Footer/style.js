import styled from "styled-components";
import { catalog } from "../../styles/colors";

export const View = styled.View`
  background-color: ${catalog.bars};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row; 
  align-items: center;
  justify-content: space-around; 
  z-index: 999;
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  /* margin-top: 10px; */
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

export const Image = styled.Image`
  margin-top: 10px;
  width: 28px;
  height: 28px;
`;
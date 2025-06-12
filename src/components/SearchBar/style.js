import styled from "styled-components";
import { search_bar } from "../../styles/colors";


export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  height: 72px;
  z-index: 10;
`;


export const TextInput = styled.TextInput`
  background-color: ${search_bar.textBackground};
  width: ${({ backButton }) => (backButton ? '90%' : '100%')};
  padding-left: 25px; /* text padding */ 
  font-size: 18px;
  border-radius: 50px;
`;


export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  width: 40px;
  /* position: absolute;
  left: 15px;
  top: 20px;
  z-index: 10; */
`;

export const ArrowImage = styled.Image`
  width: 24px;
  height: 24px;
`;
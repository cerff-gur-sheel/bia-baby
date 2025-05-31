import styled from "styled-components";
import { search_bar } from "../../styles/colors";


export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${search_bar.backgroud};
  align-items: center;
  height: 72px;
  z-index: 10;
`;


export const TextInput = styled.TextInput`
  background-color: ${search_bar.textBackground};
  width: 95%;
  height: 46px;
  margin-top: 10px;
  border-radius: 50px;
  padding-left: 25px;
  font-size: 18px;
`;

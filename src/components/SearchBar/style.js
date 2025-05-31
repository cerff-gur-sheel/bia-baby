import styled from "styled-components";
import { search_bar } from "../../styles/colors";


export const Container = styled.View`
  background-color: ${search_bar.backgroud};
  align-items: center;
  height: 72px;
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

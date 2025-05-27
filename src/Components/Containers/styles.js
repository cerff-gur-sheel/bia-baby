import styled from "styled-components";
import { colors } from '../../styles/styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1.8px solid;
  border-color: ${({ borderColor }) => borderColor ||  colors.text_input.border };
  border-radius: 25px;
  height: 45px ;
  gap: 6px;
`;

export const Image = styled.Image`
    width: 22px;
    height: 22px;
    margin: 0px 0 1px 12px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-weight: bold;
 `;

export const Text = styled.Text`
    flex: 1;
    text-align: start;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    color: #fff;
`;
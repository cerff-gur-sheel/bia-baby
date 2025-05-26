// src/screens/Auth/styles.js
import styled from "styled-components";
import { InputContainer as InputBase, ButtonContainer as ButtonBase } from '../../Components/Containers';

export const InputContainer = styled(InputBase)`
  width: 100%;
`;

export const ButtonContainer = styled(ButtonBase)`
  width: 100%;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  margin: 0 25%;
  gap: 14px;
 `;

export const DivisionText = styled.Text`
    color: #62C682;
    white-space: nowrap;
  `;

export const EnterButton = styled.TouchableOpacity`
    background-color: #62C682;
    color: #fff;
    border-radius: 25px;
    padding: 16px;  
    width: 100%;
    align-items: center;
`;
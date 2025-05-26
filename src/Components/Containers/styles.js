import styled from "styled-components";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1.8px solid;
  border-color: ${({ borderColor }) => borderColor ||  '#ef6599'};
  border-radius: 25px;
  height: 45px ;
`;

export const Image = styled.Image`
    width: 22px;
    height: 22px;
    margin: 0px 12px 1px 12px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #000;
`;

export const Text = styled.Text`
    flex: 1;
    color: #000;
`;
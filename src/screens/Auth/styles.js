// src/screens/Auth/styles.js
import styled from "styled-components";
import { colors } from "../../styles/styles";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Image = styled.Image`
  width: ${width * 1}px;
  height: ${(width * 1) * (200 / 320)}px;
  margin-bottom: ${width * 0.05}px;
`;
export const NewUserImage = styled.Image`
   width: ${width * 0.2}px;
   height: ${(width * 0.2)}px;

  /* background-color: white; */
  /* border-radius: 100%; */
`;
export const Container = styled.View`
  width: ${width}px;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  padding-top: 60px;
  margin: -15% ${width * 0.2}px 0 ${width * 0.2}px ;
  gap: 14px;
 `;

export const DivisionText = styled.Text`
    color: ${colors.text.or_auth};
`;

export const RegisterText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: ${colors.button.confirm.background};
  border-radius: 100%;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;


// src/screens/Auth/styles.js
import styled from "styled-components";
import { colors } from "../../styles/styles";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Image = styled.Image`
  width: ${width * 0.9}px;
  height: ${(width * 0.9) * (200 / 320)}px;
  margin-bottom: ${width * 0.05}px;
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
  margin: -25% 25% 0 25%;
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
  background-color: ${colors.screen.auth.register.background};
  border-radius: 25px;
  align-items: center;
`;
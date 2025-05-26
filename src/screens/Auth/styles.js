// src/screens/Auth/styles.js
import styled from "styled-components";
import { colors } from "../../styles/styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Image = styled.Image`
  width: ${width * 0.9}px;
  height: ${(width * 0.9) * (200 / 320)}px; /* Mantém a proporção original */
  margin-bottom: ${width * 0.05}px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  margin: 0 25%;
  gap: 14px;
  width: 60%;
  height: 80%;
 `;

export const DivisionText = styled.Text`
    color: ${colors.text.or_auth};
  `;
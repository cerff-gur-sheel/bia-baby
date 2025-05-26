// src/screens/Auth/RegisterScreen.js
import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  justify-content: center;
  align-items: center;
`;




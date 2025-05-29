import styled from "styled-components";
import { Button, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const View = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 15px;
`;

export const LogoImage = styled.Image`
  width: ${width * 1}px;
  height: ${(width * 1) * (200 / 320)}px;
  margin-bottom: ${width * 0.05}px;
`;

export const EnterButton = styled.TouchableOpacity`
    background-color: #62C682;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

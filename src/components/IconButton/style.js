import styled from "styled-components";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const TouchableOpacity = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    border: ${({ borderColor }) => borderColor } 1.8px solid;
    border-radius: 50px;
    height: ${height * 0.060}px;
    gap: 5px;
`;

export const Image = styled.Image`
    width: 24px;
    height: 24px;
    margin: 0px 0 1px 12px;
`;

export const Text = styled.TextInput`
    flex: 1;
`;
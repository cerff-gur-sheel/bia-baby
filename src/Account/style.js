import styled from "styled-components";

export const AccountCard = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 12px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`;

export const AccountImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 12px;
  resizeMode: contain;
  elevation: 5;
`;

export const UserText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #333;
`;

export const ButtonOption = styled.TouchableOpacity`
    background-color: #ffff;
    border-radius: 26px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    padding: 0 20px;
    margin-top: 12px;
    elevation: 5;
`;

export const OptionLeft = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const OptionIcon = styled.Image`
    width: 35px;
    height: 35px;
    resizeMode: contain;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color:  '#773C50';
`;

export const ArrowIcon = styled.Image`
    width: 35px;
    height: 35px;
    resizeMode: contain;
`;

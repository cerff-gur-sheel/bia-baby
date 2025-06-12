import styled from "styled-components/native";

export const ProductCardView = styled.View`
  width: 90%;
  max-width: 350px;
  min-height: 75%;
  padding: 10px;
  border-radius: 20px;
  background-color: #fff;
  align-self: center;
  elevation: 5; /* Android sombra */
  margin-top: 15px;
  gap: 10px;
`;

export const ProductImage = styled.Image`
    width: 250px;
    height: 250px;
    align-self: center;
    resizeMode: center;
`;

export const ProductTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductDescription = styled.Text`
    font-size: 15px;
`;

export const ButtonBuy = styled.TouchableOpacity`
  background-color: white;
  border: 2px solid #FF69B4;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 45px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  background-color: #3ACA6B;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 45px;
`;

export const ButtonTextBuy = styled.Text`
  color: #FF69B4;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonTextCart = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
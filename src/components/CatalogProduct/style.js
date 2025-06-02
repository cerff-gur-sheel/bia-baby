import styled from "styled-components";

export const Card = styled.View`
  width: 180px;
  height: 260px;
  background-color: #F555;
  border-radius: 10px;
  padding: 15px;
  margin: 8px;
  margin-bottom: 20px;
  align-items: center;
  gap: 2px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 120px;
  resizeMode: contain;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: green;
  margin: 3px 0;
`;

export const ProductReview = styled.Text`
  font-size: 13px;
  color: #555;
  margin-bottom: 2px;
`;

export const ListContainer = styled.FlatList`
  padding: 20px 10px;
  flex: 1;
  margin-bottom: 10px;
`;
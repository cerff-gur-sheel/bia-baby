import styled from "styled-components";

export const CardContainer = styled.View`
  background-color: #f9f9f9;
  margin: 16px;
  padding: 16px;
  border-radius: 12px;
  elevation: 3;
  height: 620px;
  justify-content: space-between;
`;

export const ProductListContainer = styled.View`
  height: 180px;
`;

export const ProductRow = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  color: green;
  margin-bottom: 6px;
`;

export const QuantityControl = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ControlButton = styled.TouchableOpacity`
  padding: 6px 12px;
  background-color: #ddd;
  border-radius: 6px;
`;

export const SummaryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 20px;
`;

export const SummaryLeft = styled.View`
  gap: 8px;
`;

export const SummaryRight = styled.View`
  align-items: flex-end;
  gap: 8px;
`;

export const PaymentIcons = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 4px;
`;

export const PayIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export const ButtonSection = styled.View`
  margin-top: 10px;
  gap: 10px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const PixButtonContainer = styled.View`
  align-items: center;
  margin-top: 8px;
`;

export const PaymentButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #e0e0e0;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

export const FinalizeButton = styled.TouchableOpacity`
  background-color: #3CB371;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
`;
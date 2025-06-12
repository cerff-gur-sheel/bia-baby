import styled from "styled-components";

export const CatalogListContainer = styled.FlatList.attrs({
    contentContainerStyle: {
        paddingTop: 80,
        paddingBottom: 80,
    },
})`
  flex: 1;
`;

export const CatalogCard = styled.View`
  width: 90%;
  height: 165px;
  background-color: #ffff;
  border-radius: 18px;
  margin: 16px auto;
  flex-direction: row; 
  padding: 12px;
  align-items: center;
  elevation: 5; /* Android sombra */
`;

export const ImageWrapper = styled.View`
  width: 110px;
  height: 110px;
  background-color: #ffff; 
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  elevation: 2; /* sombra no Android */
  margin: 10px;
`;

export const CatalogImage = styled.Image`
  width: 100px;
  height: 100px;
  resizeMode: contain;
`;

export const CatalogInfo = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 16px;
  align-items: flex-start;
`;

export const CatalogName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CatalogPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CatalogButton = styled.TouchableOpacity`
  background-color: #3ACA6B;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%; 
  margin-top: 8px;
`;

export const CatalogButtonText = styled.Text`
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
`;
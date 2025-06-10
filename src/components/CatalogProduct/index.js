import { useState } from "react";
import {
  CatalogListContainer,
  CatalogCard,
  ImageWrapper,
  CatalogImage,
  CatalogInfo,
  CatalogName,
  CatalogPrice,
  CatalogButton,
  CatalogButtonText
} from "./style";

import { Fashion } from "../../mocks/Products";

import { useNavigation, screens } from '../../context/NavigationContext';

export default function CatalogProduct() {
  const [catalogProduct, setCatalogProduct] = useState(Fashion);
  const { screen, setScreen } = useNavigation();

  function callPurchaseScreen(catalogProduct) {
    setScreen(screens.product);
    // setScreen(screens.product)
    // alert(`vocé comprou o produto: ${catalogProduct.name}`)
  }
  return (
    <CatalogListContainer
      data={catalogProduct}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <CatalogCard>
          <ImageWrapper>
            <CatalogImage source={item.image} />
          </ImageWrapper>
          <CatalogInfo>
            <CatalogName>{item.name}</CatalogName>
            <CatalogPrice>R$ {item.price.toFixed(2).replace('.', ',')}</CatalogPrice>
            <CatalogButton onPress={() => callPurchaseScreen(item)}>
              <CatalogButtonText> Comprar </CatalogButtonText>
            </CatalogButton>
          </CatalogInfo>
        </CatalogCard>
      )} />
  );
}
import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';
import CatalogView from '../components/CatalogView'
import { home } from '../styles/colors';

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
} from './style';

import { useNavigation, screens } from '../context/NavigationContext';

export default function Catalog() {
  const { setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(home.bars_background) }, []);

  const { setScreen, props, setProps } = useNavigation();
  const [catalogProduct] = useState(props.category);

  function callPurchaseScreen(catalogProduct) {
    setScreen(screens.product);
    setProps({ product: catalogProduct });
  }

  return (
    <CatalogView footer={true} searchBar={true} barColor='#63C683' footerColor='#63C683'>
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
              <CatalogButton onPress={() => { callPurchaseScreen(item) }}>
                <CatalogButtonText> Comprar </CatalogButtonText>
              </CatalogButton>
            </CatalogInfo>
          </CatalogCard>
        )} />
    <CatalogView footer={true} searchBar={true} backButton={true} barColor='#63C683' footerColor='#63C683'>
      <CatalogProduct />
    </CatalogView>
  );
}
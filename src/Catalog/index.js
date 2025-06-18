import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';
import CatalogView from '../components/CatalogView'
import { GREEN } from '../styles/colors';

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

import { useNavigation, screens, screen } from '../context/NavigationContext';

export default function Catalog() {
  const { setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(GREEN) }, []);

  const { setScreen, props, setProps } = useNavigation();
  const [catalogProduct] = useState(props.category);

  function callProductScreen(catalogProduct) {
    setScreen(screens.product);
    setProps({ product: catalogProduct });
    console.log("the new screen: ", screen)
  }

  return (
    <CatalogView footer searchBar backButton barColor='#63C683' footerColor='#63C683'>
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
              <CatalogButton onPress={() => { callProductScreen(item) }}>
                <CatalogButtonText> Comprar </CatalogButtonText>
              </CatalogButton>
            </CatalogInfo>
          </CatalogCard>
        )}
      />
    </CatalogView>
  );
}
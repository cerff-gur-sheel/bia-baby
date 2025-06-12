import { useContext, useEffect } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';

import CatalogView from '../components/CatalogView';

import { Container, CategoryContainer } from './style';
import { home, PINK } from '../styles/colors';
import CategoryButton from '../components/CategoryButton';

import party from '../../assets/party.jpg';
import clotches from '../../assets/clotches.jpg';
import ImageCarousel from '../components/ImageCarousel';

import photo1 from '../../assets/biababylogo.jpg';
import photo2 from '../../assets/biababylogo.jpg';
import photo3 from '../../assets/biababylogo.jpg';

const images = [photo1, photo2, photo3];

import { useNavigation, screens } from '../context/NavigationContext';
import { Fashion } from "../mocks/Products";

export default function Home() {
  const { setBackground } = useContext(BackgroundContext);
  const { setScreen, setProps } = useNavigation();

  useEffect(() => {
    setBackground(home.bars_background);
  }, []);

  return (
    <CatalogView footer={true} searchBar={true} barColor={PINK} footerColor={PINK}>
      <Container>
        <ImageCarousel images={images} />
        <CategoryContainer>
          <CategoryButton
            image={clotches}
            categoryName={"Roupas Infantis"}
            onPress={() => {
              setScreen(screens.catalog);
              setProps({ category: Fashion });
            }}
          />
          <CategoryButton
            image={party}
            categoryName={"Artigos para Festa"}
            onPress={() => {
              setScreen(screens.catalog);
              setProps({ category: Fashion });
            }}
          />
        </CategoryContainer>
      </Container>
    </CatalogView>
  );
}
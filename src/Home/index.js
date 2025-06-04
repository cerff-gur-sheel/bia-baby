import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';

import CatalogView from '../components/CatalogView'
import { Text } from "../components/Text";

import { Container, CategoryContainer } from './style';
import { home } from '../styles/colors';
import CategoryButton from '../components/CategoryButton';

import clotches from '../../assets/clotches.jpg'
import ImageCarousel from '../components/ImageCarousel';
import { Fashion, Party } from '../mocks/Products';
import CatalogProduct from '../components/CatalogProduct';

export default function Home() {
  const { background, setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(home.bars_background) }, []);

  return (
    <CatalogView footer={true} searchBar={true}>
      <Container>
        <ImageCarousel />
        <CategoryContainer>
          <CategoryButton image={clotches} categoryName={"Roupas Infantis"} />
          <CategoryButton image={clotches} categoryName={"Artigos para Festa"} />
        </CategoryContainer>
      </Container>
    </CatalogView>
  );
}
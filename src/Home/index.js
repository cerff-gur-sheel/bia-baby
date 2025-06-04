import { useContext, useEffect } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';

import CatalogView from '../components/CatalogView'
import { Text } from "../components/Text";

import { Container, CategoryContainer } from './style'; 
import { home } from '../styles/colors';
import CategoryButton from '../components/CategoryButton';

import clotches from '../../assets/clotches.jpg'
import ImageCarousel from '../components/ImageCarousel';

import photo1 from '../../assets/biababylogo.jpg';
import photo2 from '../../assets/biababylogo.jpg';
import photo3 from '../../assets/biababylogo.jpg';

  const images = [photo1, photo2, photo3];


export default function Home() {

  const { background, setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(home.bars_background) }, []);

  return (
    <CatalogView footer={true} searchBar={true}>
      <Container>
        <ImageCarousel images={images} />        
        <CategoryContainer>
          <CategoryButton image={clotches} categoryName={"Roupas Infantis"}/>
          <CategoryButton image={clotches} categoryName={"Roupas Infantis"}/>
        </CategoryContainer>
      </Container>
    </CatalogView>
  );
}
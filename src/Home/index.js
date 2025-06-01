import { useContext, useEffect } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';

import CatalogView from '../components/CatalogView'
import { Text } from "../components/Text";

import { Container } from './style'; 
import { home } from '../styles/colors';
import CategoryButton from '../components/CategoryButton';

import clotches from '../../assets/clotches.jpg'

export default function Home() {
  const { background, setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(home.bars_background) }, []);

  return (
    <CatalogView footer={true} searchBar={true}>
      <Container>
         <CategoryButton image={clotches} categoryName={"Roupas Infantis"}/>
         <CategoryButton image={clotches} categoryName={"Roupas Infantis"}/>
      </Container>
    </CatalogView>
  );
}
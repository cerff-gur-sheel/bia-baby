import { useContext, useEffect } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';
import CatalogView from '../components/CatalogView'
import { home } from '../styles/colors';
import CatalogProduct from "../components/CatalogProduct";

export default function catalog() {
  const { background, setBackground } = useContext(BackgroundContext);
  useEffect(() => { setBackground(home.bars_background) }, []);


  return (
    <CatalogView footer={false} searchBar={true}>
      <CatalogProduct />
    </CatalogView>
  );
}
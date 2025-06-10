import { useContext, useEffect } from "react";
import { Text } from 'react-native';
import { BackgroundContext } from "../context/BackgroundProvider";
import { home } from "../styles/colors";
import ProductView from "../components/ProductView";
import CardProduct from "../components/CardProduct";

export default function Product() {
  const { background, setBackground } = useContext(BackgroundContext);

  useEffect(() => {
    setBackground(home.bars_background);
  }, []);

  return (
    <ProductView
      footer={true}
      searchBar={true}
      barColor="#63C683"
      footerColor="#63C683"
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 85,
          marginLeft: 15,
          color: '#808080'
        }}
      >
        Enviar para CIDADE - CEP
      </Text>
      <CardProduct />
    </ProductView>
  );
}
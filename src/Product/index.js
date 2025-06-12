import { useContext, useEffect, useState } from "react";
import { Text } from 'react-native';
import { BackgroundContext } from "../context/BackgroundProvider";
import { home } from "../styles/colors";
<<<<<<< HEAD
import ProductView from "../components/ProductView";

import {
  ButtonAddToCart,
  ButtonBuy,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductCardView,
  ProductImage,
  ButtonTextBuy,
  ButtonTextCart
} from "./style";

import { useNavigation } from "../context/NavigationContext";
=======
import CardProduct from "../components/CardProduct";
import CatalogView from "../components/CatalogView";
>>>>>>> origin/main

export default function Product() {
  const { background, setBackground } = useContext(BackgroundContext);

  useEffect(() => {
    setBackground(home.bars_background);
  }, []);

  const { props } = useNavigation();
  const [selectedProduct] = useState(props.product);
  console.log(selectedProduct)
  return (
<<<<<<< HEAD
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
      <ProductCardView>
        <ProductImage source={selectedProduct.image} />
        <ProductTitle>{selectedProduct.name}</ProductTitle>
        <ProductPrice>R$ {selectedProduct.price.toFixed(2).replace('.', ',')}</ProductPrice>
        <ButtonAddToCart>
          <ButtonTextCart>Adicionar ao Carrinho</ButtonTextCart>
        </ButtonAddToCart>
        <ButtonBuy>
          <ButtonTextBuy>Comprar Agora</ButtonTextBuy>
        </ButtonBuy>
        <ProductDescription style={{ fontWeight: "bold" }}>
          Descrição do produto:
        </ProductDescription>
        <ProductDescription>
          {selectedProduct.description || "Sem descrição disponível"}
        </ProductDescription>
      </ProductCardView>
    </ProductView>
=======
    <CatalogView footer={true} searchBar={true} backButton={true} barColor="#63C683" footerColor="#63C683">
      {/* <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 85, marginLeft: 15, color: '#808080'}}> Enviar para CIDADE - CEP </Text> */}
      <CardProduct />
    </CatalogView>
>>>>>>> origin/main
  );
}
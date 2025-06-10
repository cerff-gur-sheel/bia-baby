import { useState } from "react";
import {
  ButtonAddToCart,
  ButtonBuy,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductView,
  ProductImage,
  ButtonTextBuy,
  ButtonTextCart
} from "./style";

import { useNavigation } from "../../context/NavigationContext";

export default function CardProduct() {
  const { props } = useNavigation();
  const [selectedProduct ] = useState(props.product);
  console.log(selectedProduct)

  return (
    <ProductView>
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
    </ProductView>
  );
}
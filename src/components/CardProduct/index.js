import { useEffect, useState } from "react";
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

import { Fashion } from "../../mocks/Products";

export default function CardProduct() {

    const [selectedProduct, setSelectedProduct] = useState(null);

    // Simulando seleção automática de um produto com ID 1 (teste temporário)
    useEffect(() => {
        handleSelectedProduct(1)
    }, []);

    function handleSelectedProduct(id) {
        const product = Fashion.find(item => item.id === id);
        setSelectedProduct(product);
    }

    if (!selectedProduct) return null; // ou loading...

    return (
        <ProductView>
            <ProductImage source={selectedProduct.image} />
            <ProductTitle> {selectedProduct.name} </ProductTitle>
            <ProductPrice>  R$ {selectedProduct.price.toFixed(2).replace('.', ',')} </ProductPrice>
            <ButtonAddToCart>
                <ButtonTextCart> Adicionar ao Carrinho </ButtonTextCart>
            </ButtonAddToCart>
            <ButtonBuy>
                <ButtonTextBuy> Comprar Agora </ButtonTextBuy>
            </ButtonBuy>
            <ProductDescription style={{ fontWeight: "bold" }}>Descrição do produto: </ProductDescription>
            <ProductDescription>{selectedProduct.description || "Sem descrição disponível"} </ProductDescription>
        </ProductView>
    );
}
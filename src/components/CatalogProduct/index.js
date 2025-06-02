import { useState } from "react";
import { View, Text, Image, Button, StyleSheet, FlatList } from "react-native";
import { Card, ProductImage, ProductName, ProductPrice, ProductReview, ListContainer} from "./style";

import { Fashion, Party} from "../../mocks/Products";

export default function CatalogProduct() {
   
    const [catalogProduct, setCatalogProduct] = useState(Fashion);

    function callPurchaseScreen(catalogProduct) {
        alert(`voce comprou o produto: ${catalogProduct.name}`)
    }

    return (
        <ListContainer
            data={catalogProduct}
            key={'2columns'}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Card>
                    <ProductName> {item.name} </ProductName>
                    <ProductImage source={item.productImage} />
                    <ProductPrice> R$ {item.productValue} </ProductPrice>
                    <ProductReview> avaliação: {item.review}⭐ </ProductReview>
                    <Button title="Comprar" onPress={() => callPurchaseScreen(item)}/>
                </Card>
            )}
        />
    );
}
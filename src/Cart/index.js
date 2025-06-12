import { useContext, useEffect, useState } from "react";
import { FlatList, Text } from 'react-native';
import { BackgroundContext } from "../context/BackgroundProvider";
import CartView from "../components/CartView";
import { home } from "../styles/colors";

import {
    CardContainer,
    ProductRow,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    QuantityControl,
    ControlButton,
    SummaryContainer,
    SummaryLeft,
    SummaryRight,
    PaymentIcons,
    PayIcon,
    ButtonSection,
    ButtonRow,
    PixButtonContainer,
    PaymentButton,
    FinalizeButton
} from './style';

import { useNavigation } from "../context/NavigationContext";

import { Party, Fashion } from '../mocks/Products';

export default function Cart() {
    const { background, setBackground } = useContext(BackgroundContext);
    useEffect(() => { setBackground(home.bars_background) }, []);

    const [cartProduct] = useState(Fashion);
    console.log('');

    return (
        <CartView footer={true} searchBar={true} barColor="#63C683" footerColor="#63C683">
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 85 }}> Carrinho de Compras </Text>
            <CardContainer>
                <FlatList
                    data={cartProduct}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductRow>
                            <ProductImage source={item.image} />
                            <ProductInfo>
                                <ProductName> {item.name} </ProductName>
                                <ProductPrice> R$ {item.price.toFixed(2).replace('.', ',')} </ProductPrice>
                                <QuantityControl>
                                    <ControlButton><Text>-</Text></ControlButton>
                                    <Text> quantidade </Text>
                                    <ControlButton><Text>+</Text></ControlButton>
                                </QuantityControl>
                            </ProductInfo>
                        </ProductRow>
                    )}
                />

                <SummaryContainer>
                    <SummaryLeft>
                        <Text>Frente:</Text>
                        <Text>Total:</Text>
                        <Text>Pagamento</Text>
                    </SummaryLeft>
                    <SummaryRight>
                        <Text>PreçoFrente</Text>
                        <Text>PreçoTotal</Text>
                        <PaymentIcons>
                            <PayIcon source={require('../../assets/visa.png')} />
                            <PayIcon source={require('../../assets/boleto.png')} />
                            <PayIcon source={require('../../assets/pix.png')} />
                        </PaymentIcons>
                    </SummaryRight>
                </SummaryContainer>

                <ButtonSection>
                    <ButtonRow>
                        <PaymentButton><Text>Cartão de Crédito</Text></PaymentButton>
                        <PaymentButton><Text>Cartão de Débito</Text></PaymentButton>
                    </ButtonRow>

                    <PixButtonContainer>
                        <PaymentButton style={{ width: '60%' }}>
                            <Text>Pix</Text>
                        </PaymentButton>
                    </PixButtonContainer>

                    <FinalizeButton>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Finalizar Compra</Text>
                    </FinalizeButton>
                </ButtonSection>

            </CardContainer>
        </CartView>
    );
}
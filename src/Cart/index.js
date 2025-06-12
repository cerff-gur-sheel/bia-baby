import { useContext, useEffect } from "react";
import { Text } from 'react-native';
import { BackgroundContext } from "../context/BackgroundProvider";
import CartView from "../components/CartView";
import { home } from "../styles/colors";


export default function Cart() {
    const { background, setBackground } = useContext(BackgroundContext);
    useEffect(() => { setBackground(home.bars_background) }, []);


    return (
        <CartView footer={true} searchBar={true} barColor="#63C683" footerColor="#63C683">
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 85}}> Carrinho de Compras </Text>
            
        </CartView>
    );
}
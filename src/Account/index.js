import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../context/BackgroundProvider';
import CatalogView from '../components/CatalogView';
import { home } from '../styles/colors';

import {
    AccountCard,
    Header,
    AccountImage,
    UserText,
    ButtonOption,
    OptionLeft,
    OptionIcon,
    Title,
    ArrowIcon
} from './style';

import { useNavigation, screens } from '../context/NavigationContext';

export default function Account() {
    const { setBackground } = useContext(BackgroundContext);
    useEffect(() => { setBackground(home.bars_background) }, []);

    const { setScreen, props, setProps } = useNavigation();

    return (
        <CatalogView footer searchBar backButton barColor='#63C683' footerColor='#63C683'>
            <AccountCard>

                <Header>
                    <AccountImage source={require('../../assets/userIcon.png')} />
                    <UserText>Olá, Nome_Do_Usuario</UserText>
                </Header>

                <ButtonOption>
                    <OptionLeft>
                        <OptionIcon source={require('../../assets/personal.png')} />
                        <Title>Dados Pessoais</Title>
                    </OptionLeft>
                    <ArrowIcon source={require('../../assets/arrowIcon.png')} />
                </ButtonOption>

                <ButtonOption>
                    <OptionLeft>
                        <OptionIcon source={require('../../assets/telephone.png')} />
                        <Title>Alterar Telefone</Title>
                    </OptionLeft>
                    <ArrowIcon source={require('../../assets/arrowIcon.png')} />
                </ButtonOption>

                <ButtonOption>
                    <OptionLeft>
                        <OptionIcon source={require('../../assets/address.png')} />
                        <Title>Endereço de Entrega</Title>
                    </OptionLeft>
                    <ArrowIcon source={require('../../assets/arrowIcon.png')} />
                </ButtonOption>

            </AccountCard>
        </CatalogView>
    );
}
import { CatalogContainer } from "./style";
import { View } from 'react-native';

import SearchBar from "../SearchBar";
import Footer from '../Footer';
import CatalogProduct from "../CatalogProduct";

import React from "react";
import styled from "styled-components";

export default function CatalogList({
    children,
    searchBar = false,
    footer = false
}) {

    return (
        <CatalogContainer>
            <SearchBar />
            <View style={{marginTop: 60, marginBottom: 60, flex: 1}}>
                <CatalogProduct />
            </View>
            <Footer />
        </CatalogContainer>
    );
}


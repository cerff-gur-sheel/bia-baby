import { View } from 'react-native';

import SearchBar from "../SearchBar";
import Footer from '../Footer';


export default function CatalogView({ 
    children, 
    searchBar = false, 
    footer = false 
  }) {

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor:'blue' 
    }}>
      {searchBar && <SearchBar />}
      {children}
      {footer && <Footer />}
    </View>
  );
}
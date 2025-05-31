import { View } from 'react-native';

import SearchBar from "../SearchBar";
import Footer from '../Footer';


export default function ProductView({ 
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
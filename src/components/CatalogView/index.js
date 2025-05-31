import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

import SearchBar from "../SearchBar";
import Footer from '../Footer';

export default function ProductView({ 
    children, 
    searchBar = false, 
    footer = false 
  }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ 
      flex: 1, 
      paddingBottom: footer ? insets.bottom : 0 
    }}>
      {searchBar && <SearchBar />}
      {children}
      {footer && <Footer />}
    </View>
  );
}
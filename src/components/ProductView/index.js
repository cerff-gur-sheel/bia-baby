import { View } from 'react-native';

import SearchBar from '../SearchBar';
import Footer from '../Footer';

export default function ProductView({
  children,
  searchBar = false,
  footer = false,
  barColor = '#ffff',
  footerColor = '#ffff'
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffff',
      }}
    >
      {searchBar && <SearchBar backgroundColor={barColor} />}
      {children}
      {footer && <Footer backgroundColor={footerColor} />}
    </View>
  );
}
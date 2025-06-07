import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useContext, useState } from 'react';
import { BackgroundProvider, BackgroundContext } from '../context/BackgroundProvider';

import Home from '../Home';
import Auth from '../Auth';
import Catalog from '../Catalog';
import Product from '../Product';

const screens = Object.freeze({
  home: 'home',
  auth: 'auth',
  catalog: 'catalog',
  product: 'product'
})

function MainContent() {
  const insets = useSafeAreaInsets();
  const { background } = useContext(BackgroundContext);

  const [screen, setScreeen] = useState(screens.product)

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      flex: 1,
      backgroundColor: background,
    }}>
      {screen == screens.auth && <Auth />}
      {screen == screens.home && <Home />}
      {screen == screens.catalog && <Catalog />}
      {screen == screens.product && <Product />}
    </View>
  );
}


export default function Main() {
  return (
    <BackgroundProvider>
      <MainContent />
    </BackgroundProvider>
  );
}

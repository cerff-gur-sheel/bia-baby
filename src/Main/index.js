import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useContext, useEffect } from 'react';
import { BackgroundContext, BackgroundProvider } from '../context/BackgroundProvider';
import { NavigationProvider, useNavigation, screens } from '../context/NavigationContext';

import Home from '../Home';
import Auth from '../Auth';
import Catalog from '../Catalog';
import Product from '../Product';

var loged = true;

function MainContent() {
  const insets = useSafeAreaInsets();
  const { background } = useContext(BackgroundContext);
  const { screen, setScreen } = useNavigation();

  useEffect(() => {
    if (loged !== true) {
      setScreen(screens.auth);
    } else {
      setScreen(screens.home);
    }
    console.log('App iniciado');
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        backgroundColor: background,
      }}
    >
      {screen === screens.auth && <Auth />}
      {screen === screens.home && <Home />}
      {screen === screens.catalog && <Catalog />}
      {screen === screens.product && <Product />}
    </View>
  );
}

export default function Main() {
  return (
    <BackgroundProvider>
      <NavigationProvider>
        <MainContent />
      </NavigationProvider>
    </BackgroundProvider>
  );
}
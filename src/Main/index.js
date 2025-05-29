import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Auth from '../Auth';
import { BackgroundProvider, BackgroundContext } from '../context/BackgroundProvider';
import { useContext, useEffect } from 'react';

function MainContent() {
  const insets = useSafeAreaInsets();
  const { background, setBackground } = useContext(BackgroundContext);

  useEffect(() => {
    setBackground('#fff');
  }, []);

  return (
    <View style={{ 
      paddingTop: insets.top, 
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      flex: 1,
      backgroundColor: background,
    }}>
      <Auth />
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

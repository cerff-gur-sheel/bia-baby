import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import Auth from '../Auth';

export default function Main() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ 
            paddingTop: insets.top, 
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 0 
        }}>
            <Auth />
        </View>
    );
}

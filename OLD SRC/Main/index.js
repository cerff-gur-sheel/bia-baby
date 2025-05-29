import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import Footer from "../Components/Footer";
import SearchBox from "../Components/SearchBox";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ 
      paddingTop: insets.top, 
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: 'pink',
      flex: 1 
    }}>
      <SearchBox/>
      <Footer/>
    </View>
  );
}

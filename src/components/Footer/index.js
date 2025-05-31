import { Text} from "react-native";
import { View } from "./style";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return(
      <View style={{marginDown: insets.top}}>
        <Text>sei la</Text>
      </View>
   );
}
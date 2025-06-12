import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton, Container, TextInput, ArrowImage } from "./style";
import { useNavigation, screens } from "../../context/NavigationContext";
import arrow from "../../../assets/arrow.png";

export default function SearchBar({ backgroundColor, backButton = false, screen = screens.catalog }) {
  const insets = useSafeAreaInsets();
  const { setScreen } = useNavigation();
  const handleBackButtonPress = () => {
    if (screen === screens.catalog) {
      setScreen(screens.home);
    } else if (screen === screens.product) {
      setScreen(screens.catalog);
    }
  };

  return (
    <Container style={{ backgroundColor }}>
      {backButton && <BackButton onPress={() => {handleBackButtonPress()}}><ArrowImage source={arrow}/></BackButton>}
      <TextInput
        placeholder="Buscar no Bia Kids."
        clearButtonMode="while-editing"
        backButton={backButton}
      />
    </Container>
  );
}
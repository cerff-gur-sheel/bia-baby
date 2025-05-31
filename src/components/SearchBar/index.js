import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, TextInput} from "./style";

export default function SearchBar() {
  const insets = useSafeAreaInsets();

  return (
      <Container style={{}}>
        <TextInput
          placeholder="Buscar no Bia Kids."
          clearButtonMode="while-editing"
        />
      </Container>
  );
}
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, TextInput } from "./style";

export default function SearchBar({ backgroundColor }) {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{ backgroundColor }}>
      <TextInput
        placeholder="Buscar no Bia Kids."
        clearButtonMode="while-editing"
      />
    </Container>
  );
}
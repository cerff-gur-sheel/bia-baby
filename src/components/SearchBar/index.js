import { StatusBar } from "react-native";
import { Container, TextInput} from "./style";
import { search_bar } from "../../styles/colors";

export default function SearchBar() {
  return (
      <Container >
        <StatusBar
          backgroundColor={search_bar.backgroud}
          barStyle="dark-content"
        />
        <TextInput
          placeholder="Buscar no Bia Kids."
          clearButtonMode="while-editing"
        />
      </Container>
  );
}
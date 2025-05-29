import { Text } from "react-native";
import { Container, View } from "./styles";
import Footer from "../../Components/Footer";
import UpperBar from "../../Components/UpperBar";

export default function Home() {
    return (
        <View>
            <UpperBar />
            <Container>
                <Text>I'm here</Text>
            </Container>
        </View>
    );
}
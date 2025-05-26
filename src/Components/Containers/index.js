// src/Components/containers/InputContainer/index.js
import { Container, TextInput, Text, Image } from "./styles";

export function InputContainer({ image, text, onClick, borderColor }) {
  return (
    <Container borderColor={borderColor}>
      <Image source={image} />
      <TextInput placeholder={text} onClick={onClick} />
    </Container>
  );
};

export function ButtonContainer({ image, text, onPress, borderColor }) {
    return (
    <Container borderColor={borderColor} onPress={onPress}>
        <Image source={image} />
        <Text>{text}</Text>
    </Container>
    );
};

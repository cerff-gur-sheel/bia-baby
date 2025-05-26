// src/Components/containers/InputContainer/index.js
import { Container, TextInput, Text, Image } from "./styles";
import { colors } from "../../styles/styles";

export function InputContainer({ image, text = '#000', textColor = '#000', borderColor}) {
  return (
    <Container borderColor={borderColor}>
      <Image source={image} />
      <TextInput placeholder={text} placeholderTextColor={textColor} style={{ color: textColor }} />
    </Container>
  );
};

export function ButtonContainer({ image, text, onPress, borderColor, backgroundColor, style }) {
  return (
    <Container
      borderColor={borderColor || backgroundColor}
      onPress={onPress}
      style={[style?.Container, { backgroundColor: backgroundColor || 'transparent' }]}
    >
      {image && <Image source={image} style={style?.Image} />}
      <Text
        style={{
          textAlign: image === undefined ? 'center' : 'start',
          color: backgroundColor === undefined ? colors.button.text_black : colors.button.text_white
        }}
      > 
        {text}
      </Text>
    </Container>
  );
};

// src/Components/containers/InputContainer/index.js
import { Container, TextInput, Text, Image } from "./styles";
import { colors } from "../../styles/styles";

export function InputContainer({ 
    image, 
    placeholder, 
    borderColor, 
    onChangeText, 
    value, 
    secureTextEntry = false,
    style = {
      backgroundColor: 'transparent',
      color: '#000'
    }
  }) {
  return (
    <Container 
      borderColor={borderColor} 
      style={{ backgroundColor: style.backgroundColor }}>
        {image && <Image source={image} style={style?.Image} />}
        <TextInput 
          placeholder={placeholder} 
          placeholderTextColor={style.color} 
          style={{
            textAlign: 'start',
            color: style.color,
            paddingLeft: image ? 0 : 30,
          }}
          onChangeText={onChangeText} 
          value={value}
          secureTextEntry={secureTextEntry}
        />
    </Container>
  );
};

export function ButtonContainer({ 
    image, 
    placeholder, 
    onPress, 
    style = {
      backgroundColor: '#000',
      borderColor: '#000'
    }
  }) {
  return (
    <Container
      borderColor={style.borderColor || style.backgroundColor}
      onPress={onPress}
      style={{ backgroundColor: style.backgroundColor || 'transparent' }}
      >
        {image && <Image source={image} style={style?.Image} />}
        <Text
          style={{
            textAlign: image === undefined ? 'center' : 'start',
            color: style.backgroundColor === undefined ? colors.button.text_black : colors.button.text_white
        }}> 
          {placeholder}
      </Text>
    </Container>
  );
};

import { textInput } from "../../styles/colors";
import { Image, View, TextInput } from "./style";

export default function IconTextInput({
        icon,
        placeholder,
        onChangeText,
        value, 
        secureTextEntry,
        style = {
            textColor: textInput.text,
            borderColor: textInput.border
        }
    }) {
    return(
        <View borderColor={style.borderColor} >
            {icon && <Image source={icon}/>}
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor={style.textColor}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}        
                value={value}
                style={{ color: style.textColor }}/>
        </View>
    );
}
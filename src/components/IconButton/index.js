import { button } from "../../styles/colors";
import { Image, TouchableOpacity, Text } from "./style";

export default function IconButton({ 
  icon, 
  placeholder, 
  onClick, 
  style = { textColor: button.text, borderColor: button.border } 
}) {
  return (
    <TouchableOpacity borderColor={style.borderColor} onClick={onClick}>
      {icon && <Image source={icon} />}
      <Text style={{ color: style.textColor }}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
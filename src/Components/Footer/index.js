import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const extraBottom = Platform.OS === 'android' ? 24 : 0;

const Container = styled.View`
  height: 56px;
  padding-bottom: ${extraBottom}px;
  background-color: ${({ bg }) => bg || '#000'};
`;

export default function Footer({ style = { backgroundColor: '#000' } }) {
  return <Container bg={style.backgroundColor} />;
}

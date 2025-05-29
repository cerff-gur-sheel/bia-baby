import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

const extraBottom = Platform.OS === 'android' ? 24 : 0;

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding-bottom: ${extraBottom}px;
  background-color: ${({ bg }) => bg || '#000'};
`;

export default function Footer({ style = { backgroundColor: '#000' } }) {
  return <Container bg={style.backgroundColor} />;
}

import { BackgroundContext } from '../context/BackgroundProvider';
import { useContext, useEffect } from 'react';


import SearchBar from "../components/SearchBar"
import { Text } from "../components/Text";
import { View } from './style'


export default function Home(){
	const { background, setBackground } = useContext(BackgroundContext);
	useEffect(() => { setBackground(); },[]);


  return(
    <>
      <SearchBar/>
      <View>
        <Text>Teste</Text>
      </View>
    </>
  );
}
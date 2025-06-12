import { View } from 'react-native';

import SearchBar from "../SearchBar";
import Footer from '../Footer';

export default function CatalogView({
	children,
	searchBar = false,
	footer = false,
	backButton = false,
  barColor = '#ffff',
	footerColor = '#ffff'
}) {
	return (
		<View style={{
			flex: 1,
			backgroundColor: '#ffff'
		}}>
			{searchBar && <SearchBar backButton={backButton} backgroundColor={barColor} />} 
			<View style={{
        flex: 1,
        marginTop: searchBar ? 75 : 0,
      }}>
        {children}
      </View>
			{footer && <Footer backgroundColor={footerColor} />}
		</View>
	);
}
import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  imageContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

export default ImageCarousel;
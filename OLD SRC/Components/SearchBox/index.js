import React from "react";
import { TextInput, StyleSheet, View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchBox() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" // texto e ícones escuros
      />
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          clearButtonMode="while-editing"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#eee",
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
});

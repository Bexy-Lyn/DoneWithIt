import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  images = [],
  onAddImage,
  onRemoveImage,
}) {
  const scroll = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scroll}
        onContentSizeChange={() => scroll.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {images.map((image, i) => (
            <View key={i} style={styles.imageContainer}>
              <ImageInput
                imageUri={image}
                onCangeImage={() => onRemoveImage(image)}
              />
            </View>
          ))}
          <ImageInput onCangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
});

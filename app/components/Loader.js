import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function Loader({ visible = false }) {
  if (!visible) return null;
  else
    return (
      <AnimatedLottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      ></AnimatedLottieView>
    );
}

import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
  title?: string;
  buttonText?: string;
}

const Footer = ({ title, buttonText }: Props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["grey", "black"]}
      style={styles.gradientStyle}
    >
      <View style={styles.gradientInnerContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={[styles.titleTextStyle]}>
            {title}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonInnerContainer}
            onPress={() => null}
          >
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

Footer.defaultProps = {
  buttonText: "Save",
};

export default Footer;

import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNBounceable from "@freakycoder/react-native-bounceable";

/**
 * ? Local Imports
 */
import styles, { _shadowStyle } from "./styles";
import { Footer } from "..";

interface IProps {
  title?: string;
  iconStyle?: any;
  iconSource?: any; // ? Not Optional
  subtitle?: string;
  largeTitle?: string;
  buttonText?: string;
  titleTextStyle?: any;
  shadowColor?: string;
  backgroundSource?: any; // ? Not Optional
  subtitleTextStyle?: any;
  buttonSubtitle?: string;
  largeTitleTextStyle?: any;
  buttonSubtitleTextStyle?: any;
  buttonOnPress: () => void;
  onPress: () => void;
}

const AppOfTheDayCard: React.FC<IProps> = (props: IProps) => {
  const {
    title,
    onPress,
    subtitle,
    iconStyle,
    largeTitle,
    buttonText,
    iconSource,
    shadowColor,
    buttonOnPress,
    titleTextStyle,
    buttonSubtitle,
    backgroundSource,
    subtitleTextStyle,
    largeTitleTextStyle,
    buttonSubtitleTextStyle,
  } = props;
  return (
    <View style={[_shadowStyle(shadowColor), { marginBottom: 32 }]}>
      <RNBounceable
        bounceEffect={0.95}
        bounceFriction={4}
        {...props}
        style={styles.container}
        onPress={onPress}
      >
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          style={styles.container}
          source={{
            uri: "https://source.unsplash.com/collection/8309166",
          }}
          {...props}
        >
          <View style={styles.innerContainer}>
            <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
              {largeTitle}
            </Text>
            <Footer title={title} />
          </View>
        </ImageBackground>
      </RNBounceable>
    </View>
  );
};

AppOfTheDayCard.defaultProps = {
  shadowColor: "#000",
  title: "Colorfy: Coloring Art Games",
  subtitle: "Drawing & painting for  everyone",
  largeTitle: `APP` + "\n" + `OF THE` + "\n" + `DAY`,
  buttonText: "Save",
  buttonSubtitle: "",
};

export default AppOfTheDayCard;

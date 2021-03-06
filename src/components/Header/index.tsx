import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import styles, { container, _dateTitleStyle, _largeTitleStyle } from "./styles";

interface IProps {
  onPress?: () => void;
  avatarStyle?: any;
  imageSource?: any;
  dateTitle?: string;
  largeTitle?: string;
  borderColor?: string;
  containerStyle?: any;
  dateTitleStyle?: any;
  largeTitleStyle?: any;
  backgroundColor?: string;
  dateTitleFontColor?: string;
  largeTitleFontColor?: string;
  dateTitleFontSize?: number | string;
  largeTitleFontSize?: number | string;
  dateTitleFontWeight?: number | string;
  largeTitleFontWeight?: number | string;
}

const Header = (props: IProps) => {
  const {
    onPress,
    dateTitle,
    largeTitle,
    avatarStyle,
    imageSource,
    containerStyle,
    dateTitleStyle,
    largeTitleStyle,
    borderColor,
    backgroundColor,
    dateTitleFontSize,
    dateTitleFontColor,
    dateTitleFontWeight,
    largeTitleFontSize,
    largeTitleFontColor,
    largeTitleFontWeight,
  } = props;
  return (
    <View style={containerStyle || container(backgroundColor, borderColor)}>
      <View>
        <Text
          style={
            dateTitleStyle ||
            _dateTitleStyle(
              dateTitleFontColor,
              dateTitleFontSize,
              dateTitleFontWeight
            )
          }
        >
          {dateTitle}
        </Text>
        <Text
          style={
            largeTitleStyle ||
            _largeTitleStyle(
              largeTitleFontColor,
              largeTitleFontSize,
              largeTitleFontWeight
            )
          }
        >
          {largeTitle}
        </Text>
      </View>
      <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
        <Image style={avatarStyle} source={imageSource} {...props} />
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  dateTitleFontSize: 13,
  largeTitle: "For You",
  dateTitleFontWeight: "600",
  largeTitleFontSize: 34,
  borderColor: "#EFEFF4",
  dateTitleFontColor: "#8E8E93",
  avatarStyle: styles.avatar,
  largeTitleFontWeight: "bold",
  backgroundColor: "transparent",
  dateTitle: moment().format("dddd, DD MMMM"),
};

export default Header;

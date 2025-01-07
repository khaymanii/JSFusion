import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "default" | "disabled" | "outlined";
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "default",
  buttonStyle,
  textStyle,
}) => {
  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case "disabled":
        return styles.disabledButton;
      case "outlined":
        return styles.outlinedButton;
      default:
        return styles.defaultButton;
    }
  };

  const getTextStyle = (): TextStyle => {
    switch (variant) {
      case "disabled":
        return styles.disabledText;
      case "outlined":
        return styles.outlinedText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.buttonBase, getButtonStyle(), buttonStyle]}
      onPress={variant !== "disabled" ? onPress : undefined}
      disabled={variant === "disabled"}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultButton: {
    backgroundColor: "#6200EE",
  },
  disabledButton: {
    backgroundColor: "#BDBDBD",
  },
  outlinedButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#6200EE",
  },
  defaultText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  disabledText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  outlinedText: {
    color: "#6200EE",
    fontSize: 16,
  },
});

export default Button;

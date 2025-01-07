import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";

type InputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const Input: React.FC<InputProps> = ({
  containerStyle,
  inputStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 55,
    borderColor: "#CCCCCC",
    borderWidth: 0,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderWidth: 0, // Removes the border on focus
  },
});

export default Input;

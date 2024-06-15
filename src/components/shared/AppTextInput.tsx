import React, { FC, RefObject } from 'react';
import { TextInputProps, TextInput as RNTextInput, StyleSheet } from 'react-native';
import colors from "../../common/colors";

interface Props extends TextInputProps {
  forwardRef?: RefObject<RNTextInput>;
}

const AppTextInput: FC<Props> = (props) => {
  const {
    forwardRef,
    autoCorrect = false,
    style,
  } = props;

  return (
    <RNTextInput
      {...props}
      ref={forwardRef}
      autoCorrect={autoCorrect}
      style={[styles.simpleInput, style]}
      placeholderTextColor={props.placeholderTextColor ?? colors.lightGrey}
    />
  );
};

const styles = StyleSheet.create({
  simpleInput: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 6,
    height: 48,
    paddingHorizontal: 12,
    color: colors.fontPrimary,
  }
})

export default AppTextInput;

import React, { ReactNode } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ColorValue,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import AppText from './AppText';
import colors from '../../common/colors';

interface Props extends TouchableOpacityProps {
  label: string;
  loadingColor?: ColorValue;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  disabled?: boolean;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

const LoadingButton: React.FC<Props> = (props) => {
  const {
    label,
    style,
    loadingColor,
    titleStyle,
    isLoading,
    disabled = false,
    iconRight,
    iconLeft,
    activeOpacity,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.5}
      disabled={disabled || isLoading}
      onPress={props.onPress}
      style={[
        styles.button,
        style,
        disabled && styles.disabledButton,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingColor || colors.white} />
      ) : (
        <>
          {iconLeft && <View style={{ marginRight: 10 }}>{iconLeft}</View>}
          <AppText style={[styles.titleStyle, titleStyle]}>{label}</AppText>
          {iconRight && <View style={styles.iconView}>{iconRight}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.button,
  },
  disabledButton: {
    backgroundColor: colors.lightGrey,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  iconView: {
    marginLeft: 10,
  },
});

export default LoadingButton;

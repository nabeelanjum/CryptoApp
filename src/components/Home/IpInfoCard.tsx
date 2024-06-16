import React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import AppText from '../shared/AppText';
import colors from '../../common/colors';

interface IProps {
  title: string;
  value: string;
  color?: ColorValue;
}

const IpInfoCard: React.FC<IProps> = ({
  title,
  value,
  color,
}) => {
  return (
    <View style={styles.container}>
      <AppText size={16} semiBold color={color ?? colors.fontPrimary}>
        {title}
      </AppText>
      <AppText size={15} color={color ?? colors.fontPrimary}>
        {value}
      </AppText>
    </View>
  );
}

export default IpInfoCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  }
});

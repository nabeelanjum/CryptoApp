import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../shared/AppText';

interface IProps {
  title: string;
  value: string;
}

const IpInfoCard: React.FC<IProps> = ({
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <AppText size={16} semiBold>
        {title}
      </AppText>
      <AppText size={15}>
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

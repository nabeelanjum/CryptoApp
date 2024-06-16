import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import IpInfoCard from '../components/Home/IpInfoCard';
import colors from '../common/colors';

const Profile = ({ route }) => {

  const image = route.params?.image;
  const ipData = route.params?.ipData;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={image}
      >
        <View style={styles.overlayView} />
        <IpInfoCard color={colors.white} title='IP Address' value={ipData?.ip} />
        <IpInfoCard color={colors.white} title='Location' value={`${ipData?.city}, ${ipData?.country}`} />
        <IpInfoCard color={colors.white} title='Internet Service Provider' value={ipData?.connection?.isp} />
      </ImageBackground>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
  },
  overlayView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlay,
  },
});

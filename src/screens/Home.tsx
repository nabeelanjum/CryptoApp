import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import useIpData from '../hooks/useIpData';
import LoadingButton from '../components/shared/LoadingButton';
import AppTextInput from '../components/shared/AppTextInput';
import colors from '../common/colors';
import IpInfoCard from '../components/Home/IpInfoCard';
import { SCREEN_WIDTH } from '../common/constants';
import images from '../assets/images';
import { StackRoutes } from '../navigation/routes';

const Home = ({ navigation }) => {

  const {
    getIpData,
    ip,
    ipData,
    updateIp,
    isLoading,
  } = useIpData();

  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <AppTextInput
          placeholder='Enter IP Address'
          value={ip}
          onChangeText={(updateIp)}
          returnKeyType='done'
        />
        <LoadingButton
          label='Get IP Details'
          disabled={!ip}
          style={{ marginTop: 15 }}
          onPress={getIpData}
          isLoading={isLoading}
        />
        <View style={styles.infoContainer}>
          <IpInfoCard title='IP Address' value={ipData?.ip} />
          <IpInfoCard title='Location' value={`${ipData?.city}, ${ipData?.country}`} />
          <IpInfoCard title='Internet Service Provider' value={ipData?.connection?.isp} />
        </View>
      </View>

      <Carousel
        mode='parallax'
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH / 1.6}
        data={Object.values(images)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate(StackRoutes.Profile, { image: item, ipData })}
            style={{ flex: 1 }}
          >
            <Image style={styles.carouselImage} source={item} />
          </Pressable>
        )}
      />

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {
  },
  carouselImage: {
    width: '97%',
    height: '100%',
    borderRadius: 10,
  }
});

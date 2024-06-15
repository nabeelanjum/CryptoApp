import React from 'react';
import { StyleSheet, View } from 'react-native';
import useIpData from '../hooks/useIpData';
import LoadingButton from '../components/shared/LoadingButton';
import AppTextInput from '../components/shared/AppTextInput';
import colors from '../common/colors';
import IpInfoCard from '../components/Home/IpInfoCard';

const Home = () => {

  const {
    getIpData,
    ip,
    ipData,
    updateIp,
    isLoading,
  } = useIpData();

  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder='Enter IP Address'
        value={ip}
        onChangeText={(updateIp)}
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
        <IpInfoCard title='ISP Provider' value={ipData?.connection?.isp} />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
  },
  infoContainer: {
    // flexDirection: 'row',
  }
});

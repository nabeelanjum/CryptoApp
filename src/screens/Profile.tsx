import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Profile = ({ route }) => {

  const image = route.params?.image;
  const ipData = route.params?.ipData;

  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1 }}
        source={image}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

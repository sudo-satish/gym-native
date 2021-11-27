import {View, ScrollView, Text, Image, Center} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const ReelsPage = () => {
  return (
    <View flex={1}>
      <ScrollView>
        <Image
          // style={styles.container}
          source={require('../../assets/images/ReelBodyBuilder.jpg')}
          width={700}
          height={700}
          // width="full"
          alt="Reel"
        />
        <Image
          // style={styles.container}
          source={require('../../assets/images/ReelGym.jpg')}
          width={700}
          height={700}
          // width="full"
          alt="Reel"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 16,
    // marginTop: -100,
  },
});

export default ReelsPage;

import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>

  );
};

export default HomeScreen;
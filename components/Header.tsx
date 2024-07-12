import React from  'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, PickerIOSComponent } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});

export default App;
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Bomba from './src/components/Bomba/Bomba';

class App extends Component {
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <Bomba />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

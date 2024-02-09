import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class BombaBetterFuel extends Component<CombustivelProps, CombustivelStates> {
  constructor(props: CombustivelProps) {
    super(props);
    this.state = {
      alcool: props.alcool,
      gasolina: props.gasolina,
      modalVisible: false,
      whatFuelBetter: props.whatFuelBetter,
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.whatFuelBetter}</Text>
        <Image style={styles.imgLogo} source={require('./imgs/gas.png')} />
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.modalVisible}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
});

export default BombaBetterFuel;

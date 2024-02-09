import React, {Component} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BombaBetterFuel from './BombaBetterFuel';

class CombustivelManagerImpl implements CombustivelManager {
  private isBetter: string = '';

  betterOption(
    alcool: number,
    gasolina: number,
    callback: (whatIsBetter: string) => void,
  ): void {
    var auxCalculate: number = alcool / gasolina;

    if (auxCalculate < 0.7) {
      this.isBetter = 'É melhor abastecer com alcool';
      callback(this.isBetter);
    } else {
      this.isBetter = 'É melhor abastecer com gasolina';
      callback(this.isBetter);
    }
  }
}

class Bomba extends Component<{}, CombustivelStates> {
  private combustivelManager: CombustivelManager;

  constructor(props: {}) {
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      modalVisible: false,
      whatFuelBetter: '',
    };

    this.combustivelManager = new CombustivelManagerImpl();
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.combustivelManager.betterOption(
      this.state.alcool,
      this.state.gasolina,
      whatIsBetter => this.setState({whatFuelBetter: whatIsBetter}),
    );
    if (this.state.alcool !== 0 && this.state.gasolina !== 0) {
      this.setState({
        modalVisible: true,
      });
    }
  }

  sair(visible: boolean) {
    this.setState({
      modalVisible: visible,
    });
  }

  render(): React.ReactNode {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Bomba</Text>
        <Image style={styles.imgLogo} source={require('./imgs/logo.png')} />
        <Text style={styles.title}>Qual a melhor opção ?</Text>
        <Text style={styles.titleTopFieldText}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => this.setState({alcool: Number(value)})}
          placeholder="Digite o preço"
          keyboardType="numeric"
        />
        <Text style={styles.titleTopFieldText}>
          Gasolina (preço por litro):
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={value => this.setState({gasolina: Number(value)})}
          placeholder="Digite o preço"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={this.entrar}>
          <Text>Calcular</Text>
        </TouchableOpacity>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <BombaBetterFuel
            gasolina={this.state.gasolina}
            alcool={this.state.alcool}
            modalVisible={() => this.sair(false)}
            whatFuelBetter={this.state.whatFuelBetter}
          />
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  titleTopFieldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 16,
  },
  input: {
    height: 40,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
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
});

export default Bomba;

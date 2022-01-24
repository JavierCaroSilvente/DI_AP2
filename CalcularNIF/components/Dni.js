import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', ' K', 'E', 'T'];

export class Dni extends Component {

    constructor(props){
        super(props);
        this.state = {
            letra:'',
            numero:0,
        };
    };

    handleNumber = number => {
      this.setState({numero:number}, () => {
        if (this.state.numero.length === 8)
        {
          this.setState({letra:letras[this.state.numero % 23]})
        }
        else {
          this.setState({letra:''})
        }
        });
      };

  render() {
    return (
      <>
        <View >
            <View>
              <Text>DNI:</Text>
            </View>
            <View style={styles.cabecera}>
              <TextInput style={styles.input1}
                maxLength={8}
                underlineColorAndroid={'blue'}
                placeholder='Escribe el DNI'
                keyboardType = 'numeric'
                onChangeText={this.handleNumber}
                />
                <TextInput style={styles.input2}
                maxLength={8}
                editable={false}
                underlineColorAndroid={'blue'}
                placeholder='Letra'
                keyboardType = 'numeric'
                value = {this.state.letra}
                />
            </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  cabecera: {
    marginTop: 0,
    marginLeft: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    height: 50,
  },
  input1: {
    backgroundColor:'white',
    placeholderTextColor: 'grey',
    underlineColorAndroid:'blue'
  },
  input2: {
    backgroundColor:'white',
    color: 'grey',
   marginLeft: 25,
  }
});
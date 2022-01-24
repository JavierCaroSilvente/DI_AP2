import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dni} from './components/Dni';

class App extends Component {
  render() {
    return (
        <View style={styles.principal}>
          <Dni/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor:'white'
  }
});

export default App;
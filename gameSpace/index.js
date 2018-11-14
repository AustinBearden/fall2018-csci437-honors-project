import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  asset,
  View,
  Text
} from 'react-360';
import Entity from 'Entity';

export default class gameSpace extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        {/* <Entity source={{obj: asset('FooseballApplied.obj'), mtl: asset('FooseballApplied.mtl')}}/> */}
        <Text>Hey</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('gameSpace', () => gameSpace);

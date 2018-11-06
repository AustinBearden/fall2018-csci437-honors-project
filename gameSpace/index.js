import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  asset,
  View,
} from 'react-360';

export default class gameSpace extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('Hellicop.jpeg')} style={styles.panel} />
        </View>
      </View>
    );
  }
};

// we wat to move gameSpace position


const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
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

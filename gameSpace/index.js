import React from 'react';
import { Component } from 'react';
import { WebView } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Entity,
  asset,
  Text,
  View,
} from 'react-360';

// export default class gameSpace extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel}>
//         <View style={styles.greetingBox}>
//           <Text style={styles.greeting}>
//             Welcome to React 360
//           </Text>
//         </View>
//       </View>
//     );
//   }
// };

var hello = "Hello You!!";

export default class SimpleGame extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Text>Hello Everyone</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
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

AppRegistry.registerComponent('SimpleGame', () => SimpleGame);

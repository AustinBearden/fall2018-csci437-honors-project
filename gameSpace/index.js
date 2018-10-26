import React from 'react';
import { Component } from 'react';
import { WebView } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
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

export default class MyInlineWeb extends Component {
  render() {
    return (
      <View style={styles.panel}>
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
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

AppRegistry.registerComponent('gameSpace', () => gameSpace);

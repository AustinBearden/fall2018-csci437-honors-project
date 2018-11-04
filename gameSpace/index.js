import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
} from 'react-360';

export default class contentOne extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsOne.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
};

class contentTwo extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsTwo.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
}

class contentThree extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsThree.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
}

class contentFour extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsFour.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
}

class contentFive extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsFive.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
}

class contentSix extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panel}>
          <Image source={asset('CumminsSix.jpeg')} style={styles.panel}/>
        </View>
      </View>
    );
  }
}

class controlPanel extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>This is the control panel</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 600,
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

AppRegistry.registerComponent('contentOne', () => contentOne);
AppRegistry.registerComponent('contentTwo', () => contentTwo);
AppRegistry.registerComponent('contentThree', () => contentThree);
AppRegistry.registerComponent('contentFour', () => contentFour);
AppRegistry.registerComponent('contentFive', () => contentFive);
AppRegistry.registerComponent('contentSix', () => contentSix);
AppRegistry.registerComponent('controlPanel', () => controlPanel);

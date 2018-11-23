import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
} from 'react-360';

import Option1 from './Option1/Option1';



export default class contentOne extends React.Component {
  constructor() {
    super();

    this.myArray = [];
   
  }


  render() {
    return (
      <View style={styles.panel1}>
      </View>
    );
  }
};

class contentTwo extends React.Component {
  render() {
    return (
      <View style={styles.panel2}>
      </View>
    );
  }
}

class contentThree extends React.Component {

  outputConsole1() {
    console.log('Door 1!');
    //instead of just changing the environment's background (which is very easy to do),
        // I wamt to load the Option1.js file instead of the index.js file
  }
  outputConsole2() {
    console.log('Door 2!');
  }
  outputConsole3() {
    console.log('Door 3!');
  }
  outputConsole4() {
    console.log('Door 4!');
  }
  outputConsole5() {
    console.log('Door 5!');
    AppRegistry.registerComponent('floorMenu', () => floorMenu);
  }

  render() {
    return (
      <View style={styles.panel3}>
      <View style={styles.arrowBox}>
      <VrButton onClick={() => this.outputConsole1()}>
        <Image source={asset('rg1024-Door-with-cristal-and-wall.png')} style={styles.arrow}></Image>
      </VrButton>
      <VrButton onClick={() => this.outputConsole2()}>
        <Image source={asset('rg1024-Door-with-cristal-and-wall.png')} style={styles.arrow}></Image>
      </VrButton>
      <VrButton onClick={() => this.outputConsole3()}>
        <Image source={asset('rg1024-Door-with-cristal-and-wall.png')} style={styles.arrow}></Image>
      </VrButton>
      <VrButton onClick={() => this.outputConsole4()}>
        <Image source={asset('rg1024-Door-with-cristal-and-wall.png')} style={styles.arrow}></Image>
      </VrButton>
      <VrButton onClick={() => this.outputConsole5()}>
        <Image source={asset('rg1024-Door-with-cristal-and-wall.png')} style={styles.arrow}></Image>
      </VrButton>
      </View>
      </View>  
    );
  }
}

/*
Door images:
-> https://openclipart.org/detail/20135/door-with-cristal-and-wall
-> https://openclipart.org/detail/75991/door-line-art
-> https://openclipart.org/detail/20106/door
-> https://openclipart.org/detail/2356/door-white-stroke

*/

class floorMenu extends React.Component {
  render() {
    return (
      <View style={styles.menuPanel}>
      {/* <View style={styles.greetingBox}>
        <Text style={styles.greeting}>StarWars Menu:
          Can you see this text?
        </Text>
      </View> */}
      </View>

    )
  }

}

const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 4000,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel1: {
    // Fill the entire surface
    width: 4000,
    height: 500,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  panel2: {
    // Fill the entire surface
    width: 4000,
    height: 500,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel3: {
    // Fill the entire surface
    width: 1000,
    height: 300,
    backgroundColor: 'skyblue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuPanel: {
    width: 6000,
    height: 8000,
    backgroundColor: '#000000',
    
  },
  directionBtn1: {
    width: 200,
    height: 400,
    backgroundColor: '#ffffff',
  },
  directionBtn2: {
    width: 200,
    height: 400,
    backgroundColor: '#BC8F8F',
    
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
  arrowBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  arrow: {
    width: 200,
    height: 270,
  },
});

AppRegistry.registerComponent('contentOne', () => contentOne);
AppRegistry.registerComponent('contentTwo', () => contentTwo);
AppRegistry.registerComponent('contentThree', () => contentThree);
// AppRegistry.registerComponent('floorMenu', () => floorMenu);


import React from "react";
import { ScrollView, StyleSheet, Dimensions, TextInput, Image, View } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class success extends React.Component {

  render(){
    return(
        <ScrollView>
        <View style={styles.Container}>
        <Image
          style={{height:50, width:50}}
          source={{uri: 'https://raw.githubusercontent.com/mastermoo/rn-emoji-feedback/master/src/assets/smile_big.png'}}
        />
        </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   inputContainer: {
//     padding: 100,
//     margin: 50,
//     borderColor: "black",
//     borderWidth: 1,
//     backgroundColor: 'blue'
//   },
//   input: {
//     height: 40,
//     marginBottom: 20,
//   }
// });
const styles = StyleSheet.create({
    Container: {
        
        paddingTop: 320,
      justifyContent: 'center',
      alignItems: 'center',
    },
    source: {
      width: 300,
      height: 400,
    },
  });
  
export default success;






// import React, { Component } from 'react';
// import { View, Image } from 'react-native';

// export default class DisplayAnImage extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={{width: 50, height: 50}}
//           source={require('@expo/snack-static/react-native-logo.png')}
//         />
//         <Image
//           style={{width: 50, height: 50}}
//           source={{uri: 'https://raw.githubusercontent.com/mastermoo/rn-emoji-feedback/master/src/assets/smile_big.png'}}
//         />
//       </View>
//     );
//   }
// }
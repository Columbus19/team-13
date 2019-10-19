import React, { setGlobal } from "reactn";
import { ScrollView, StyleSheet, Dimensions, TextInput, Image, View } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";
import ProgressEnums from "../enums/progressEnums";

const { width } = Dimensions.get("screen");

class Success extends React.Component {

  onHandleSubmit = () => {
    setGlobal({
      userStage: new ProgressEnums().final,
    });
    const { navigation } = this.props;
    navigation.navigate("ProgressBar");
  }

  render(){
    return(
        <ScrollView>
        <View style={styles.Container}>
        <Image
          style={{height:50, width:50}}
          source={{uri: 'https://raw.githubusercontent.com/mastermoo/rn-emoji-feedback/master/src/assets/smile_big.png'}}
        />
        </View>

        <Block style={{padding: 30}}>
          <Text h1 center>
            Thank you for completing the application.
          </Text>
          <Text h3 center>
            A representive with reach out with your matches soon, provided you reached all of the requirements.
          </Text>
        </Block>

      <Block center style={{paddingBottom: 30, paddingTop: 50}}>
        <Button color="success" 
        style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}
        onPress={() => {this.onHandleSubmit()}}>
          Return to home!
        </Button>
      </Block>

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
        
        paddingTop: 120,
      justifyContent: 'center',
      alignItems: 'center',
    },
    source: {
      width: 300,
      height: 400,
    },
  });
  
export default Success;






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
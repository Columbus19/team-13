import React, { setGlobal } from "reactn";
import { ScrollView, StyleSheet, Dimensions, TextInput, Image } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

import Images from "../constants/Images";
import ProgressEnums from "../enums/progressEnums";
const { width } = Dimensions.get("screen");

class Prematching extends React.Component {
  
  onHandleSubmit = () => {
    setGlobal({
      userStage: new ProgressEnums().training,
    });
    const { navigation } = this.props;
    navigation.navigate("Success");
  }

  render(){
    return(
    <Block center>
      <Block>
        <Image source={Images.chase} style={styles.logos}/>
      </Block>

      <Block>
        <Image source={Images.honeywell} style={styles.logos}/>
      </Block>

      <Block>
        <Image source={Images.comcast} style={styles.logos}/>
      </Block>

      <Block center style={{paddingBottom: 30, paddingTop: 50}}>
        <Button color="success" 
        style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}
        onPress={() => {this.onHandleSubmit()}}>
          Continue
        </Button>
      </Block>

    </Block>
    );
  }
};

const styles = StyleSheet.create({
  logos:{
    
  },
  input: {
    height: 40,
    marginBottom: 20,
  }
});
export default Prematching;
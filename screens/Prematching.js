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
    navigation.navigate("ProgressBar");
  }

  render(){
    return(
    <Block center style={{marginTop: 20}}>
      <Text h1 bold>
        Possible Matches
      </Text>
      <Text h5 center style={{marginBottom: 50}}>
        Continue to see who you interview with!
      </Text>

      <Block style={{marginBottom: 20}}>
        <Image source={Images.chase} style={{width: 300, height: 100}}/>
      </Block>

      <Block style={{marginBottom: 20}}>
        <Image source={Images.honeywell} style={styles.logos} style={{width: 300, height: 100}}/>
      </Block>

      <Block style={{marginBottom: 20}}>
        <Image source={Images.comcast} style={styles.logos} style={{width: 300, height: 100}}/>
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
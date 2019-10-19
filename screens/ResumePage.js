import React from "react";
import { ScrollView, StyleSheet, Dimensions, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class ResumePage extends React.Component {
  render(){
    return(
      <ScrollView>
        <Text style={{fontSize:96}}>Resumé Details</Text>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    padding: 100,
    marginBottom: 200
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20
  }
});

export default ResumePage;
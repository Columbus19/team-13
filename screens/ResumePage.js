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
        <Text style={{fontSize:24}}>Application Details</Text>
        <TextInput style={styles.inputContainer}></TextInput>
        <TextInput style={styles.inputContainer}></TextInput>
        <TextInput style={styles.inputContainer}></TextInput>
        <TextInput style={styles.inputContainer}></TextInput>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 100,
    margin: 50,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: 'blue'
  },
  input: {
    height: 40,
    marginBottom: 20,
  }
});

export default ResumePage;
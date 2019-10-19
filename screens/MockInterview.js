import React from "react";
import { ScrollView, StyleSheet, Dimensions, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class MockInterview extends React.Component {
    constructor(){
        super();

        this.state = {
            test: 0
            // test1: 0
        };
    }

    onHandleChangeTest = () => {
        this.setState({
            test: ++this.state.test
            // test1: ++this.state.test1
        });
    }

  render(){
    return(
      <ScrollView>
        <Block flex style={{padding: 20}}>
        <Text style={{fontSize:24}}>Mock Interview</Text>
        <Text style={{fontSize:15}}> For this mock interview you would be prompted with 6 questions 
        regarding your past group or academic experiences. Before answering the questions you would
        be given time to think up an answer and when that time is up you will present your answer through an audio 
        recording that would begin recording at your time.</Text>
        
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            1. Tell me about a time that you were in ...
          </Text>
        <Button style={{marginBottom: 20}} onPress={this.onHandleChangeTest}>Record</Button>
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            2. What is your reason for ...
          </Text>
          <Button style={{marginBottom: 20}} onPress={this.onHandleChangeTest}>Record</Button>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            3. What his best ....
          </Text>
          <Button style={{marginBottom: 20}} onPress={this.onHandleChangeTest}>Record</Button>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            4. Do you have any previous experience ...
          </Text>
          <Button style={{marginBottom: 20}} onPress={this.onHandleChangeTest}>Record</Button>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            5. When you took this class ....
          </Text>
          <Button style={{marginBottom: 20}} onPress={this.onHandleChangeTest}>Record</Button>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            6. How would you handle a situation where ...
          </Text>
          <Button onPress={this.onHandleChangeTest}>Record</Button>
          </Block>
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

  
export default MockInterview;
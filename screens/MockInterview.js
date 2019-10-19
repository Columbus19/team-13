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
        };
    }

    onHandleChangeTest = () => {
        this.setState({
            test: ++this.state.test
        });
    }

  render(){
    return(
      <ScrollView>
        <Text style={{fontSize:24}}>Mock Interview</Text>
        <Text style={{fontSize:15}}> For this mock interview you would be prompted with 6 questions 
        regarding your past group or academic experiences. Before answering the questions you would
        be given time to think up an answer and when that time is up. Present your answer through a video 
        recording that would begin recording at your time.
        
        </Text>
        <Text>{this.state.test}</Text>
        <Button onPress={this.onHandleChangeTest}>Test</Button>
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
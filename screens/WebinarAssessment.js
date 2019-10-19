import React from "react";
import { ScrollView, StyleSheet, Dimensions, CheckBox, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class Assessment extends React.Component {
  //displays questions
  QuestionNumber = (question) => {
    return (<Text
            h2
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline",paddingTop: 20}}
            color={argonTheme.COLORS.DEFAULT}>
        "{question}"
        </Text>);
  }

  //displays buttons and options 
  ButtonOptions = (Option) => {
    return (
      <CheckBox
        center
        title= {Option}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      />
    );
  }
  
  render(){
    return(
      <ScrollView>
        <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 , textAlign:"center"}}
            color={argonTheme.COLORS.DEFAULT}>
        Check Your Learning!
        </Text>


        {this.QuestionNumber("Question 1")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <View style={styles.spacing}/>

        {this.QuestionNumber("Question 2")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <View style={styles.spacing}/>

        {this.QuestionNumber("Question 3")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <View style={styles.spacing}/>

        {this.QuestionNumber("Question 4")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <View style={styles.spacing}/>

        {this.QuestionNumber("Question 5")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <View style={styles.spacing}/>

        {this.QuestionNumber("Question 6")}
        {this.ButtonOptions("Option 1")}
        {this.ButtonOptions("Option 2")}
        {this.ButtonOptions("Option 3")}
        {this.ButtonOptions("Option 4")}
        {this.ButtonOptions("Option 5")}

        <Block center style={{paddingBottom: 30, paddingTop: 50}}>
            <Button color="success" style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}>
              Submit!
            </Button>
        </Block>

        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spacing: {
    margin:20
  }
});

export default Assessment;
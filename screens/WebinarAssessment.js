import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class Assessment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        Option1: false,
        Option2: false,
        Option3: false,
        Option4: false
    }
  }

  //displays questions
  QuestionNumber = (question) => {
    return (<Text
            h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center",paddingTop: 20}}
            color={argonTheme.COLORS.DEFAULT}>
        "{question}"
        </Text>);
  }

  //displays buttons and options 
  ButtonOptions = (Option,OptionNum) => {
    return (
      <CheckBox
        center
        title= {Option}
        style={styles.checkboxes}
        clicked = {this.state.OptionNum}
        onPress={() => this.setState({checked: !this.state.clicked})}
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

        {this.QuestionNumber("Question")}


        
        <CheckBox
          title = 'Option 1'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.Option1}
          onPress={() => this.setState({Option1: !this.state.Option1})}
        />

        <CheckBox
          title = 'Option 2'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.Option2}
          onPress={() => this.setState({Option2: !this.state.Option2})}
        />

        <CheckBox
          title = 'Option 3'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.Option3}
          onPress={() => this.setState({Option3: !this.state.Option3})}
        />

        <CheckBox
          title = 'Option 4'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.Option4}
          onPress={() => this.setState({Option4: !this.state.Option4})}
        />
         

        {/* {this.ButtonOptions("Option 1",this.state.Option1)}
        {this.ButtonOptions("Option 2","Option2")}
        {this.ButtonOptions("Option 3","Option3")}
        {this.ButtonOptions("Option 4","Option4")} */}

        <Block center style={{paddingBottom: 30, paddingTop: 50}}>
            <Button color="success" 
            style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}
            onPress={() => {this.onHandleSubmit()}}>
              Submit
            </Button>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spacing: {
    margin:20
  },
  checkboxes: {
    margin:20,
    height:50,
    width:50
  }
});

export default Assessment;
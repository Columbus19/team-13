import React, { setGlobal } from "reactn";
import { ScrollView, StyleSheet, Dimensions, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";
import ProgressEnums from "../enums/progressEnums";

const { width } = Dimensions.get("screen");

class Assessment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      options: [false, false, false, false]
    }
  }

  onHandleSubmit = () => {
    setGlobal({
      userStage: new ProgressEnums().training,
    });
    const {
      navigation
    } = this.props;
    navigation.navigate("ProgressBar");
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
  
  onHandleChangeCheckbox = (index) => {
    var newOptions = [];
    for(var i = 0; i < this.state.options.length; ++i){
      if(i+1 == index) newOptions.push(true);
      else newOptions.push(false);
    }
    this.setState({
      options: newOptions
    });
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
          checked = {this.state.options[0]}
            onPress = {
              () => this.onHandleChangeCheckbox(1)
            }
        />

        <CheckBox
          title = 'Option 2'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.options[1]}
            onPress = {
              () => this.onHandleChangeCheckbox(2)
            }
        />

        <CheckBox
          title = 'Option 3'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.options[2]}
          onPress = {
            () => this.onHandleChangeCheckbox(3)
          }
        />

        <CheckBox
          title = 'Option 4'
          checkedIcon = 'dot-circle-o'
          uncheckedIcon = 'circle-o'
          checked = {this.state.options[3]}
                    onPress = {
                      () => this.onHandleChangeCheckbox(4)
                    }
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
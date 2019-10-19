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
        <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 , textAlign:"center"}}
            color={argonTheme.COLORS.DEFAULT}>
        Application Details
        </Text>
        
        {/*inputs for basic info*/}
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            First Name
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. John" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Last Name
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. Smith" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Email Address
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. hi@example.com" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Phone Number
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. 888-888-8888" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Current Address
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter current address here" iconContent={<Block />} />
        </Block>
        
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Permanent Address
          </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter permanent address here" iconContent={<Block />} />
        </Block>



        <TextInput style={styles.inputContainer}></TextInput>
        <TextInput style={styles.inputContainer}></TextInput>
        <TextInput style={styles.inputContainer}></TextInput>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    textAlign:"left",
    color: "black",
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 18
  }
});

export default ResumePage;
import React from "react";
import { ScrollView, StyleSheet, Dimensions, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class TrainingHome extends React.Component {
  render(){
    return(
        <Block flex center>
            <ScrollView>
                <Text style={{fontSize:24}}>Training Home</Text>

            </ScrollView>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default TrainingHome;
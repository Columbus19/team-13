import React from "react";
import { ScrollView, StyleSheet, Dimensions} from "react-native";
// Galio components
import { Block, Text, theme } from "galio-framework";
// Argon themed components
import { argonTheme} from "../constants/"

const { width } = Dimensions.get("screen");

class TrainingVideo extends React.Component {
    render(){
      return(
          <Block flex center>
              <Text bold size={42} style={styles.title}>
                Insert Vid Here
              </Text>
          </Block>
      );
      <Block center style={{paddingBottom: 30, paddingTop: 50}}>
            <Button color="success" 
            style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}
            onPress={() => {this.onHandleSubmit()}}>
              Finished video? Click here
            </Button>
        </Block>
    }
  }
  
  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
    },
  });

export default TrainingVideo;
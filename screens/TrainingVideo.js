import React, { setGlobal, useGlobal  } from "reactn";
import { StyleSheet, Dimensions, WebView} from "react-native";
// Galio components
import { Block, Button, Text, theme } from "galio-framework";
// Argon themed components
import { argonTheme} from "../constants/";
import YouTube from 'react-native-youtube';


const { width } = Dimensions.get("screen");

class TrainingVideo extends React.Component {
    render(){
      const { navigation } = this.props;
      return(
        <Block>
          <Button
            style={styles.button}
            color={argonTheme.COLORS.PRIMARY}
            onPress={() => navigation.navigate("TrainingVideo")}
            textStyle={styles.buttonText}
          >
          </Button>
        </Block>
      );
    }
  }
  
  const styles = StyleSheet.create({
    button: {
      marginBottom: 20,
      position: 'relative'
    },
    buttonText: {
      color: argonTheme.COLORS.BLACK,
      fontWeight: "bold",
      fontSize: 16
    },
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
    }
  });

export default TrainingVideo;
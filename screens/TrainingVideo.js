import React, { setGlobal, useGlobal  } from "reactn";
import { StyleSheet, Dimensions, WebView, Image} from "react-native";
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
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: width, height: 400, marginBottom: 30}} />
       <Block flex center>    
          <Button
            style={styles.button}
            color="primary"
            onPress={() => navigation.navigate("Assessment")}
            textStyle={styles.buttonText}
          >
            Go to assessment
          </Button>
        </Block>
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
      color: argonTheme.COLORS.WHITE,
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
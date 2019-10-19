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
<Image source={{uri: 'https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg'}}
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
import React, { setGlobal, useGlobal  } from "reactn";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import  ProgressEnums from "../enums/progressEnums";

const { width } = Dimensions.get("screen");

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.progressEnums = new ProgressEnums();
  }

  // renderLineButton = () => {
  //   <Block center>
  //      <Button
  //         color="info"
  //         style={{
  //         width: 3,
  //         height: 50
  //       }}
  //       >
  //     </Button>
  //   </Block>
  // }

  renderStageButton = (text, pageToNav) => {
    var selectedButtonColor = "default";
    var unselectedButtonColor = "lightGray";

    const isSelected = this.global.userStage == pageToNav;

    if(isSelected){
      return(
        <Block center>
            <Button 
            color={selectedButtonColor} 
            style={styles.button}
            textStyle={styles.selectedButtonText}
            onPress={() => this.props.navigation.navigate(pageToNav)}
            >
              {text + "   >"}
          </Button>
        </Block>
      );
    }else{
      return(
        <Block center>
            <Button
            disabled={true} 
            color={unselectedButtonColor} 
            style={styles.button}
            textStyle={styles.unselectedButtonText}
            >
              {text}
          </Button>
        </Block>
      );
    }
  }

  renderButtons = () => {
    return (
      <Block flex>
        <Text h1 bold size={30} style={styles.title}>
          Progress
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 100 }}>
          {this.renderStageButton("Application", this.progressEnums.application)}
          <Block center>
            <Button
              color="info"
              style={{
                width: 3,
                height: 50
              }}
            >
            </Button>
          </Block>
          {this.renderStageButton("Training", this.progressEnums.training)}
          <Block center>
            <Button
              color="info"
              style={{
                width: 3,
                height: 50
              }}
            >
            </Button>
          </Block>
          {this.renderStageButton("Mock Interview", this.progressEnums.interview)}
          <Block center>
            <Button
              color="info"
              style={{
                width: 3,
                height: 50
              }}
            >
            </Button>
          </Block>
          {this.renderStageButton("Success", this.progressEnums.Success)}
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.renderButtons()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER,
    textAlign: "center"
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginTop: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 2 ,
    // width: width - theme.SIZES.BASE * 2,
    width: width / 2,
    height: 60,
    borderRadius: 99,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  selectedButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  unselectedButtonText: {
    color: "grey",
    fontSize: 18,
    fontWeight: "600"
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});

export default ProgressBar;
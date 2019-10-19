import React from "react";
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

  renderStageButton = (text, pageToNav) => {
    var selectedButtonColor = "default";
    var unselectedButtonColor = "secondary";

    const isSelected = global.userState.stage == pageToNav;

    if(isSelected){
      return(
        <Block center>
            <Button 
            color={selectedButtonColor} 
            style={styles.button}
            onPress={() => this.props.navigation.navigate(pageToNav)}
            >
              {text}
          </Button>
        </Block>
      );
    }else{
      return(
        <Block center>
            <Button 
            color={unselectedButtonColor} 
            style={styles.button}
            textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
            >
              {text}
          </Button>
        </Block>
      );
    }
  }

  renderButtons = () => {
    var selectedButton = "default";
    var unselectedButton = "secondary";

    const applicationColor = this.props.stage === this.progressEnums.application ? selectedButton : unselectedButton;
    const trainingColor = this.props.stage === this.progressEnums.training ? selectedButton : unselectedButton;
    const interviewColor = this.props.stage === this.progressEnums.interview ? selectedButton : unselectedButton;
    const finalColor = this.props.stage === this.progressEnums.final ? selectedButton : unselectedButton;

    return (
      <Block flex>
        <Text bold size={16} style={styles.title}>
          Progress
        </Text>
        <Text bold size={16} style={styles.title}>
          {global.userState.stage}
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {this.renderStageButton("Application", this.progressEnums.application)}
          {/* SPACER LINE */}
          <Block center>
            <Button
              color="info"
              style={{
                width: 5,
                height: 100
              }}
            >
            </Button>
          </Block>
          {/* SPACER LINE END*/}
          <Block center>
            <Button
              color={trainingColor}
              textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
              style={styles.button}
            >
              Training
            </Button>
          </Block>
          {/* SPACER LINE */}
          <Block center>
            <Button
              color="info"
              style={{
                width: 5,
                height: 100
              }}
            >
            </Button>
          </Block>
          {/* SPACER LINE END*/}
          <Block center>
            <Button
              color={interviewColor}
              textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
              style={styles.button}
            >
              Mock Interview
            </Button>
          </Block>
          {/* SPACER LINE */}
          <Block center>
            <Button
              color="info"
              style={{
                width: 5,
                height: 100
              }}
            >
            </Button>
          </Block>
          {/* SPACER LINE END*/}
          <Block center>
            <Button
              color={finalColor}
              textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
              style={styles.button}
            >
              Complete
            </Button>
          </Block>
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
    color: argonTheme.COLORS.HEADER
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
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 99,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
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
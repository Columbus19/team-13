import React, { setGlobal, useGlobal  } from "reactn";
import VideoRecorder from 'react-native-beautifulfu-video-recorder';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme, Card } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import  ProgressEnums from "../enums/progressEnums";

const { width } = Dimensions.get("screen");

class Interview extends React.Component {
  constructor(props) {
    super(props);
    this.progressEnums = new ProgressEnums();
    this.videoRecorder = new VideoRecorder();
  }

  start = () => {
    this.videoRecorder.open((data) => {
        console.log('captured data', data);
    });
  }

  renderMainSection = () => {
    return (
      <Block flex>
        <Text bold size={16} style={styles.title}>
          Interview
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 60 }}>
            <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} compressQuality={'high'} />

            {/* {this.renderStageButton("Application", this.progressEnums.application)}
            {this.renderLineButtons()}
            {this.renderStageButton("Training", this.progressEnums.training)}
            {this.renderLineButtons()}
            {this.renderStageButton("Mock Interview", this.progressEnums.interview)}
            {this.renderLineButtons()}
            {this.renderStageButton("Finish Application", this.progressEnums.final)} */}
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.renderMainSection()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  lineButtons:{
    width: 5,
    height: 100
  },
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

export default Interview;
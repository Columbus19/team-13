import React from "react";
import { ScrollView, StyleSheet, ImageBackground, Dimensions} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { Card } from "../components";
import { articles, Images, argonTheme} from "../constants/"

const { width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;

class TrainingVideo extends React.Component {
  render(){
    return(
        <Block flex center>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {this.renderCards()}

            </ScrollView>
        </Block>
    );
  }

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Training
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={articles[0]} horizontal />
            <Card item={articles[0]} horizontal />
            <Card item={articles[0]} horizontal />
            <Card item={articles[4]} full />
          </Block>
        </Block>
      </Block>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TrainingVideo;
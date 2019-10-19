import React from "react";
import { ScrollView, StyleSheet, Dimensions} from "react-native";
// Galio components
import { Block, Button, Text, theme } from "galio-framework";
// Argon themed components
import { CardTraining } from "../components";
import { articles, argonTheme} from "../constants/"

const { width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;

class TrainingHome extends React.Component {
  render(){
    return(
        <Block flex center>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {this.renderButtons()}

            </ScrollView>
        </Block>
    );
  }

  renderButtons = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Training
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.SECONDARY}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
              Test Button
            </Button>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.SECONDARY}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
              Test Button
            </Button>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.SECONDARY}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
              Test Button
            </Button>
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

export default TrainingHome;
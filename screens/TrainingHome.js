import React from "react";
import { ScrollView, StyleSheet, ImageBackground, Dimensions} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { Card } from "../components";
import { articles, Images, argonTheme} from "../constants/"

const { width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;

class TrainingHome extends React.Component {
  render(){
    return(
        <Block flex center>
            <ScrollView>
              <Text bold size={16} style={styles.title}>
                Training
              </Text>
                {this.renderCards()}

            </ScrollView>
        </Block>
    );
  }

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[4]} full />
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products["View article"] }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>
                    View article
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
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
    paddingTop: theme.SIZES.BASE
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
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  }
});

export default TrainingHome;
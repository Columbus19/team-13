import React, { setGlobal, useGlobal  } from "reactn";
import { ScrollView, StyleSheet, Dimensions} from "react-native";
// Galio components
import { Block, Button, Text, theme } from "galio-framework";
// Argon themed components
import { CardTraining } from "../components";
import { articles, argonTheme} from "../constants/"
import  ProgressEnums from "../enums/progressEnums";

const { height, width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;

class TrainingHome extends React.Component {
  onHandleGoToInterview(){
    setGlobal({
      userStage: new ProgressEnums().interview,
    });
    const { navigation } = this.props;
    navigation.navigate("ProgressBar");
  }

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
      <Block flex>
        <Text bold size={16} style={styles.title}>
          Training
        </Text>
        <Block flex>
          <Block style={{ padding: 20}}>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.DEFAULT}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={styles.buttonText}
              >
              <Text style={styles.buttonText}>About INROADS ></Text>
              <Text></Text>
              <Text style={styles.buttonTextSmall}s>0/3 lessons</Text>
            </Button>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.DEFAULT}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={styles.buttonText}
              >
              <Text style={styles.buttonText}> Preparing for an internship ></Text>
              <Text></Text>
              <Text style={styles.buttonTextSmall}>0/5 lessons</Text>
            </Button>
            <Button
              style={styles.button}
              color={argonTheme.COLORS.DEFAULT}
              onPress={() => navigation.navigate("TrainingVideo")}
              textStyle={styles.buttonText}
              >
              <Text style={styles.buttonText}>Interviewing skills ></Text>
              <Text></Text>
              <Text style={styles.buttonTextSmall}>0/6 lessons</Text>
            </Button>
            <Button
              color="success"
              onPress={() => this.onHandleGoToInterview()}
              textStyle={styles.buttonText}
              >
              To Interview Stage
            </Button>
          </Block>
        </Block>
      </Block>
    );
  };
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    position: 'relative',
    height: height / 8
  },
  buttonText: {
    color: argonTheme.COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 20
  },
  buttonTextSmall:{
    color: "rgb(180,180,180)",
    fontSize: 12,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    fontSize: 24,
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
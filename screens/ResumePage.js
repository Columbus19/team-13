import React from "react";
import { ScrollView, StyleSheet, Dimensions, TextInput } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button, Select, Icon, Input, Header, Switch } from "../components";

const { width } = Dimensions.get("screen");

class ResumePage extends React.Component {
  render(){
    return(
      <ScrollView>
        <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 , textAlign:"center"}}
            color={argonTheme.COLORS.DEFAULT}>
        Application Details
        </Text>
        
        <Text
            h2
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline",paddingTop: 20}}
            color={argonTheme.COLORS.DEFAULT}>
        General Information
        </Text>

        {/*inputs for basic info*/}
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            First Name
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. John" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Last Name
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. Smith" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Email Address
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. hi@example.com" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Phone Number
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="ex. 888-888-8888" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Current Address
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter current address here" iconContent={<Block />} />
        </Block>
        
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Permanent Address
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter permanent address here" iconContent={<Block />} />
        </Block>

        {/*Start of resumé specifics*/}
        <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 , textAlign:"center", textDecorationLine:"underline", paddingTop: 20}}
            color={argonTheme.COLORS.DEFAULT}>
        Resume Specifics
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Objective Statement
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter Objective Statement" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Education
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            School
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Ohio State University" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Location of School
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Columbus, Ohio" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Field of Study (Major)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Computer Science" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Field of Study (Minor(s), comma separated)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Mathematics" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Current Overall GPA
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. 3.47" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Expected Graduation Month and Year
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. May 2021" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Relevant Coursework (comma separated)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Data Structures and Algorithms, Linear Algebra, ..." iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Technical/Non-Technical Skills (comma separated)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Microsoft Office Suite, Bilingual in English and Hindi, ..." iconContent={<Block />} />
        </Block>

        <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 , textAlign:"center", textDecorationLine:"underline", paddingTop: 20}}
            color={argonTheme.COLORS.DEFAULT}>
            Work and Technical Experience
        </Text>

        {/*Projects/Research Inputs*/}
        <Text
          h3
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Projects/Research
        </Text>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight:"bold"}}
          color={argonTheme.COLORS.DEFAULT}>
          Projects/Research(1)
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Project/Research Name
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Sea Perch Robot Project" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Location
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Orlando, FL" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>
        
        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight:"bold"}}
          color={argonTheme.COLORS.DEFAULT}>
          Projects/Research(2)
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Project/Research Name
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Sea Perch Robot Project" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Location
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Orlando, FL" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>
        
        {/*Experience Inputs*/}
        <Text
          h3
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Work Experience
        </Text>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight:"bold"}}
          color={argonTheme.COLORS.DEFAULT}>
          Work Experience(1)
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Company/Place of work
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Ann Taylor" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight:"bold"}}
          color={argonTheme.COLORS.DEFAULT}>
          Work Experience(2)
        </Text>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Company/Place of work
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Ann Taylor" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 , marginLeft: 15}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        {/*Volunteer Inputs*/}
        <Text
          h3
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Volunteer Experience
        </Text>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Volunteer Experience(1)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Volunteer group/activity
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. The United Way" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if currently position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Volunteer Experience(2)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Volunteer group/activity
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. The United Way" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>
        
        {/*Leadership/Organizations Inputs*/}
        <Text
          h3
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Leadership/Organizations
        </Text>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Leadership/Organizations(1)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Organization
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. The United Way" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if currently position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Leadership/Organizations(2)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Organization
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. The United Way" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role/Job Title
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Team Member" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if current position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Description/Duties (Can be multiple sentences)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="Enter description here" iconContent={<Block />} />
        </Block>

        {/*Activities and Awards Inputs*/}
        <Text
          h3
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "center", textDecorationLine: "underline", paddingTop: 10 }}
          color={argonTheme.COLORS.DEFAULT}>
          Activities and Awards
        </Text>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Activities/Awards(1)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Organization/Accomplishment/Achievement
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Florida Bright Futures Scholarship" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Recipient" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if currently position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>
        
        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Activities/Awards(2)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Organization/Accomplishment/Achievement
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Florida Bright Futures Scholarship" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Recipient" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if currently position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Text
          h4
          style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "left", fontWeight: "bold" }}
          color={argonTheme.COLORS.DEFAULT}>
          Activities/Awards(3)
        </Text>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Organization/Accomplishment/Achievement
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Florida Bright Futures Scholarship" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Role
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. Recipient" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Start Date
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. October 2013" iconContent={<Block />} />
        </Block>

        <Text
          h5
          style={{ marginBottom: theme.SIZES.BASE / 2, marginLeft: 15 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          End date (Enter Present if currently position)
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input multiline="true" scroll="true" right placeholder="ex. November 2014" iconContent={<Block />} />
        </Block>

        <Block center style={{paddingBottom: 30, paddingTop: 50}}>
            <Button color="success" style={{marginBottom: theme.SIZES.BASE, width: width - theme.SIZES.BASE * 2}}>
              Submit!
            </Button>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    textAlign:"left",
    color: "black",
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 18
  }
});

export default ResumePage;
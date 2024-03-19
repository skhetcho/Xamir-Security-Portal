/*eslint-disable*/ import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import Description from "./Sections/Description";
import Profile from "./Sections/Profile.js";
import CustomFooter from "components/CustomFooter/CustomFooter.js";
import CustomHeader from "components/CustomHeader/CustomHeader";

const useStyles = makeStyles(landingPageStyle);

export default function AboutPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <CustomHeader/>
      <Parallax image={require("assets/img/aboutImage.jpeg").default} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Dive deeper in the realm of the underworld.</h1>
              <h4>
                Getting into cyber and offensive security is rather an uneasy
                route for beginners. This platform is meant to help people who
                are newly introduced to the concept of offensive security,
                information gathering, and network security to build their
                understanding by using a GUI interface to famous security tools
                such as Nmap.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Description/>
          <Profile/>
        </div>
      </div>
     <CustomFooter/>
    </div>
  );
}

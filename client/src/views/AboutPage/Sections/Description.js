import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Web from "@material-ui/icons/Web";
import Security from "@material-ui/icons/Security";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function Description() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Why does this matter?</h2>
          <div>
            <h5 className={classes.description}>
              It is important for enthusiasts, programmers, or other IT
              professionals to undestand and take a more serious look at
              cybersecurity. It is becoming more frequent in today{"'"}s world
              to hear about different cyber attacks and recognize how essential
              it is for every member who has a background in IT to understand
              the fundamentals and the first steps taken in such attacks...
            </h5>
            <h5 className={classes.description}>
              <b>Information Gather!</b>
            </h5>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Interactive"
              description="This provides a quickly deployed and setup environment for beginners to start using security tools."
              icon={Web}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Robust"
              description="This could be deployed and made more secure given that it is containerized."
              icon={Security}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Scalable"
              description="This could be deployed autonomously on different subdomains allowing users to have their own environment to work out of."
              icon={TrendingUp}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

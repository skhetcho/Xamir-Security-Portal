/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionPricing from "views/PricingPage/Sections/SectionPricing.js";
import SectionFeatures from "views/PricingPage/Sections/SectionFeatures.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import CustomFooter from "components/CustomFooter/CustomFooter";
import CustomHeader from "components/CustomHeader/CustomHeader";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <CustomHeader />

      <Parallax
        image={require("assets/img/pricingbackground.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>You are awesome!</h1>
              <h4>
                Thank you for checking out the donation section, this will
                really help me establish an understanding of whether this
                project is valid for individuals like you!
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <SectionFeatures />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

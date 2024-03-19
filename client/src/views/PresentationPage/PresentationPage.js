/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from 'components/CustomButtons/Button.js';
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//glitch and typing effect

//import custom sections
import CustomFooter from "components/CustomFooter/CustomFooter";
import CustomHeader from "components/CustomHeader/CustomHeader";

//import styles
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

//user-api to insert their feedback if given.
import commandApi from "api/command-apis";

//main style
const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  //initiate main style
  const classes = useStyles();


  return (
    <div>
      <CustomHeader/>
      <Parallax
        image={require("assets/img/background.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Xamir Security Portal
                  <span className={classes.proBadge}>L33t</span>
                </h1>
                <h3 className={classes.title}>
                  A Slayer Platform for n00bs to learn Cyb3rsecurity 
                </h3>
                <Button color="primary" onClick={
                  async () => {
                      await commandApi
                        .runNmap({ command: "test" })
                        .then((res) => {
                          if (res.data.success) {
                            console.log(res);
                          }
                          else {
                            console.log(res.error);
                          }
                        });
                    }
                }>Get Started</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/*
        
        ADD CODE HERE
        
        
         */}
      <CustomFooter />
    </div>
  );
}

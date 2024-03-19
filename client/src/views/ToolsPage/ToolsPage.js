/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//terminal
import Terminal from "terminal-in-react";

//import custom sections
import CustomFooter from "components/CustomFooter/CustomFooter";
import CustomHeader from "components/CustomHeader/CustomHeader";

//import styles
import toolsStyle from "assets/jss/material-kit-pro-react/views/toolsStyle";

//user-api to insert their feedback if given.
import commandApi from "api/command-apis";

//main style
const useStyles = makeStyles(toolsStyle);

export default function ToolsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  //initiate main style
  const classes = useStyles();

  let globalCommand = "";

  // interface between the docker terminal to use the tools interactively (different languages) and the React frontend (Javascript)
  // through an API
  const commandExecutor = async (command) => {
    await commandApi.runNmap({ command: command }).then((res) => {
      if (res.data.success) {
        globalCommand = res.data.message;
      } else {
        globalCommand = "Command not found";
      }
    });
  };

  return (
    <div>
      <CustomHeader />
      <Parallax style={{ backgroundColor: "#000" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem sm={4} md={6}>
              <Terminal
                color="green"
                backgroundColor="black"
                barColor="black"
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commandPassThrough={(command, print) => {
                  commandExecutor(command).then(() => {
                    print(globalCommand);
                  });
                }}
                msg="You can write anything here to run on your Docker instance..."
              />
            </GridItem>
            <GridItem sm={4} md={6}>
              <div className={classes.brand}>
                <h3>
                  Nmap, info gathering, and more - All your network scanning
                  needs
                </h3>
                <h5 style={{ textAlign: "justify" }}>
                  <a target="_blank" href="https://nmap.org/">
                    Nmap
                  </a>{" "}
                  is practically the most difficult tool out of all the CLI
                  tools included within this project. Other tools like{" "}
                  <a
                    target="_blank"
                    href="https://tools.kali.org/information-gathering/dnsmap"
                  >
                    dnsmap
                  </a>
                  <br />
                  This interactive CLI is directly integrated with a server API
                  to gracefully (yet primitive) with a backend shell providing
                  access to networking tools through the browser.
                </h5>

                <br />
                <br />
                <br />
                <h5>copy the following and paste it in the command line</h5>
                <div>
                  <TextField
                    error
                    inputProps={{ style: { color: 'white'}}}
                    id="outlined-disabled"
                    label="Copy me"
                    defaultValue="nmap 127.0.0.1"
                    variant="outlined"
                  />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <CustomFooter />
    </div>
  );
}

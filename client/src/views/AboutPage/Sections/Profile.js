import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";
import Button from "components/CustomButtons/Button.js";

//image
import profileImg from "assets/img/profile/image.png";

//style
import profileSection from "assets/jss/material-kit-pro-react/views/landingPageSections/profileStyle";

const style = {
  ...profileSection,
  justifyContentCenter: {
    justifyContent: "center",
  },
};

const useStyles = makeStyles(style);

export default function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Who{"'"}s behind it?</h2>
      <div>
        <Card profile plain className={classes.card}>
          <GridItem xs={12} sm={5} md={5} className={classes.cardContent}>
            <CardHeader image plain style={{ border: 0 }}>
              <img src={profileImg} className={classes.image} alt="..." />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${profileImg})`,
                  opacity: "1",
                }}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={7} md={7} className={classes.cardContent}>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Souren Khetcho</h4>
              <Muted>
                <h6 className={classes.cardCategory}>CREATOR</h6>
              </Muted>
              <p className={classes.description}>
                Have been building and experimenting with different tools and
                software solutions in the search of ultimate seamlessness in IT
                infrastructures.
              </p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentCenter}>
              <Button
                justIcon
                simple
                color="linkedin"
                href="https://www.linkedin.com/in/sourenkhetcho/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                justIcon
                simple
                color="twitter"
                href="https://twitter.com/SourenKhetcho"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                justIcon
                simple
                color="github"
                href="https://github.com/skhetcho"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </GridItem>
        </Card>
      </div>
    </div>
  );
}

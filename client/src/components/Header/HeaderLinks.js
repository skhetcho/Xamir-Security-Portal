/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AttachMoney from "@material-ui/icons/AttachMoney";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  // TODO: ENABLE THESE FOR THE DROP DOWN COLORING WHEN USED
  // var onClickSections = {};

  // const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {/* TODO: IMPLEMENT REDIRECTION TO SPECIFIC TOOLS */}
      {/* <ListItem className={classes.listItem}> */}
      {/* <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>,
            <a
              href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>,
          ]}
        />
      </ListItem> */}
      <ListItem>
        <Link to="/" className={classes.dropdownLink}>
          Home
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/about" className={classes.dropdownLink}>
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/tools" className={classes.dropdownLink}>
          Tools
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/pricing"
          color={"pink"}
          className={classes.navButton}
          round
        >
          <AttachMoney className={classes.icons} /> Donate
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};

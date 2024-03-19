import {
  // container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  section,
  coloredShadow,
  blackColor,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";
import imagesStyle from "assets/jss/material-kit-pro-react/imagesStyles.js";

const profileSection = {
  mlAuto,
  mrAuto,
  cardTitle,
  coloredShadow,
  description: {
    color: grayColor[0],
  },
  descriptionWhite: {
    ...description,
  },
  textCenter: {
    textAlign: "center",
  },
  section: {
    ...section,
    padding: "70px 0",
    textAlign: "center",
    position: "relative",
    "& $title": {
      color: blackColor,
    },
  },
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[8],
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  card: {
    textAlign: "center",
  },
  cardContent: {
    alignSelf: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  smallTitle: {
    color: grayColor[7],
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  image: {
    backgroundColor: "#0001",
  },
};

export default profileSection;

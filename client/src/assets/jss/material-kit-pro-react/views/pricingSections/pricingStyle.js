import {
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitlePricing: {
    ...cardTitle,
    paddingRight: 15,
  },
  cardTitleWhite: {
    ...cardTitle,
    paddingRight: 6,
    color: whiteColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.8)!important",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  pricingSection: {
    padding: "80px 0px",
  },
  textInfo: {
    color: infoColor[0] + " !important",
  },
  currencyImage: {
    height: 40,
    width: 40,
  },
  QRImage: {
    height: 250,
    width: 250,
  },
};

export default pricingStyle;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//media crypto logos
import ethereum from "assets/img/cryptoImages/ethereum.png";
import bitcoin from "assets/img/cryptoImages/bitcoin.png";
import monero from "assets/img/cryptoImages/monero.png";
//media crypto QR
import bitcoinQR from "assets/img/cryptoImages/payment/bitcoinQR.png";
import ethereumQR from "assets/img/cryptoImages/payment/ethereumQR.png";
import moneroQR from "assets/img/cryptoImages/payment/moneroQR.png";

//dialog components needed for modal
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

//dialog style
const useModalStyle = makeStyles(modalStyle);

//modal related transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  //initiate dialog style
  const modalClasses = useModalStyle();

  //modal controler
  const [bitcoinModal, setBitcoinicModal] = React.useState(false);
  //modal controler
  const [ethereumModal, setEthereumModal] = React.useState(false);
  //modal controler
  const [moneroModal, setMoneroModal] = React.useState(false);

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          style={{ flexBasis: "100%", maxWidth: "100%" }}
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <NavPills
            alignCenter
            color="rose"
            tabs={[
              {
                tabButton: "FIAT",
                tabContent: (
                  <GridContainer>
                    <GridItem md={4} sm={4}>
                      <Card plain pricing>
                        <CardBody pricing>
                          <h6
                            className={classNames(
                              classes.cardCategory,
                              classes.textInfo
                            )}
                          >
                            Spark
                          </h6>
                          <h1 className={classes.cardTitlePricing}>
                            <small>$</small>3
                          </h1>
                          <ul>
                            <li>
                              <b>1</b> Cup of Coffee
                            </li>
                          </ul>
                          <Button href="#pablo" color="rose" round>
                            Get started
                          </Button>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem md={4} sm={4}>
                      <Card raised pricing color="rose">
                        <CardBody pricing>
                          <h6 className={classes.cardCategory}>Flame</h6>
                          <h1 className={classes.cardTitleWhite}>
                            <small>$</small>10
                          </h1>
                          <ul>
                            <li>
                              <b>1</b> Server Cost For a Month
                            </li>
                          </ul>
                          <Button href="#pablo" color="white" round>
                            Get started
                          </Button>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem md={4} sm={4}>
                      <Card plain pricing>
                        <CardBody pricing>
                          <h6
                            className={classNames(
                              classes.cardCategory,
                              classes.textInfo
                            )}
                          >
                            Blaze 🔥
                          </h6>
                          <h1 className={classes.cardTitlePricing}>
                            <small>$</small>35
                          </h1>
                          <ul>
                            <li>
                              <b>1</b> Raspberry Pi
                            </li>
                          </ul>
                          <Button href="#pablo" color="rose" round>
                            Get started
                          </Button>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "CRYPTO",
                tabContent: (
                  <div style={{ paddingTop: 25, paddingLeft: 30 }}>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textInfo
                      )}
                    >
                      Whatever Your Heart Desires
                    </h6>
                    <div>
                      <Button onClick={() => setMoneroModal(true)} simple>
                        <img
                          className={classes.currencyImage}
                          src={ethereum}
                          sizes
                        />
                      </Button>
                      <Button onClick={() => setBitcoinicModal(true)} simple>
                        <img
                          className={classes.currencyImage}
                          src={bitcoin}
                          sizes
                        />
                      </Button>
                      <Button onClick={() => setEthereumModal(true)} simple>
                        <img
                          className={classes.currencyImage}
                          src={monero}
                          sizes
                        />
                      </Button>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      {/* Bitcoin Modal */}
      <Dialog
        classes={{
          root: modalClasses.modalRoot,
          paper: modalClasses.modal,
        }}
        open={bitcoinModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setBitcoinicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <Button
            simple
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setBitcoinicModal(false)}
          >
            {" "}
            <Close className={modalClasses.modalClose} />
          </Button>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={modalClasses.modalBody}
          style={{ alignSelf: "center" }}
        >
          {" "}
          <img src={bitcoinQR} className={classes.QRImage} />
        </DialogContent>
      </Dialog>
      {/* Bitcoin Modal */}
      {/* Ethereum Modal */}
      <Dialog
        classes={{
          root: modalClasses.modalRoot,
          paper: modalClasses.modal,
        }}
        open={ethereumModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setEthereumModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <Button
            simple
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setEthereumModal(false)}
          >
            {" "}
            <Close className={modalClasses.modalClose} />
          </Button>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={modalClasses.modalBody}
          style={{ alignSelf: "center" }}
        >
          <img src={moneroQR} className={classes.QRImage} />
        </DialogContent>
      </Dialog>
      {/* Ethereum Modal */}
      {/* Monero Modal */}
      <Dialog
        classes={{
          root: modalClasses.modalRoot,
          paper: modalClasses.modal,
        }}
        open={moneroModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setMoneroModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <Button
            simple
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setMoneroModal(false)}
          >
            {" "}
            <Close className={modalClasses.modalClose} />
          </Button>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={modalClasses.modalBody}
          style={{ alignSelf: "center" }}
        >
          <img src={ethereumQR} className={classes.QRImage} />
        </DialogContent>
      </Dialog>
      {/* Monero Modal */}
    </div>
  );
}

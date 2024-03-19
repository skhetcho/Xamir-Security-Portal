/*eslint-disable*/
import React, { useRef } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Favorite from "@material-ui/icons/Favorite";

//dialog components needed for modal
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

//Recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//user-api to insert their feedback if given.
import userApi from "api/user-apis";

//import styles
import customFooterStyle from "assets/jss/material-kit-pro-react/components/customFooterStyle";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

//main style
const useStyles = makeStyles(customFooterStyle);
//dialog style
const useModalStyle = makeStyles(modalStyle);

//modal related transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function CustomFooter() {

  //feedback value holder
  const [feedbackValue, setFeedbackValue] = React.useState("");

  //feedback value handler
  const handleFeedbackChange = (event) => {
    setFeedbackValue(event.target.value);
  };

  //modal controler
  const [classicModal, setClassicModal] = React.useState(false);

  //ReCaptcha Ref
  const reRef = useRef();

  //initiate main style
  const classes = useStyles();
  //initiate dialog style
  const modalClasses = useModalStyle();



  return (
      <Footer
        theme="white"
        content={
          <div className={classes.alignWithPage}>
            <div className={classes.left}>
              <a
                href="/"
                className={classes.footerBrand}
              >
                Xamir Security Portal
              </a>
            </div>
            <div className={classes.pullCenter}>
              <Button
                color="primary"
                round
                onClick={() => setClassicModal(true)}
              >
                <Favorite /> Give Feedback
              </Button>
              <Dialog
                classes={{
                  root: modalClasses.modalRoot,
                  paper: modalClasses.modal,
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
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
                    onClick={() => setClassicModal(false)}
                  >
                    {" "}
                    <Close className={modalClasses.modalClose} />
                  </Button>
                  <h4 className={modalClasses.modalTitle}>
                    We Value Your Feedback
                  </h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={modalClasses.modalBody}
                >
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Feedback"
                    multiline
                    maxRows={10}
                    style={{ width: "100%" }}
                    value={feedbackValue}
                    onChange={handleFeedbackChange}
                    variant="outlined"
                  />
                  <ReCAPTCHA
                    sitekey={"6Lc8YukbAAAAAOM2edlmE4oV_-jsEyJxGz1j3Z1b"}
                    size="invisible"
                    ref={reRef}
                  />
                </DialogContent>
                <DialogActions className={modalClasses.modalFooter}>
                  <Button
                    onClick={() => setClassicModal(false)}
                    color="secondary"
                  >
                    Close
                  </Button>
                  <Button
                    color="primary"
                    onClick={async () => {
                      const token = await reRef.current.executeAsync();
                      reRef.current.reset();
                      await userApi
                        .insertFeedback({ feedbackValue, token })
                        .then((res) => {
                          if (res.data.success) {
                            console.log(res);
                            setClassicModal(false);
                            setFeedbackValue("");
                            window.alert("Thanks for submitting your feedback");
                          }
                        });
                    }}
                  >
                    Complete
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/SourenKhetcho"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://www.linkedin.com/in/sourenkhetcho/"
                    target="_blank"
                    color="linkedin"
                    justIcon
                    simple
                  >
                    <i className="fab fa-linkedin-in" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://github.com/skhetcho"
                    target="_blank"
                    color="gitlab"
                    justIcon
                    simple
                  >
                    <i className="fab fa-gitlab" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
  );
}

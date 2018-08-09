import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import logo from "../../assets/img/logo.svg";
import footerLogo from "../../assets/img/jobsity-footer.png";
import styles from "./styles";

class Welcome extends Component {
  state = {
    toMain: false
  };

  goToMain = () => this.setState({ toMain: true });

  render() {
    const { classes } = this.props;
    const { toMain } = this.state;

    if (toMain) {
      return <Redirect to="/home" />;
    }

    // to be injected in props
    const data = {
      lang: "JAVASCRIPT",
      candidate: "John Doe",
      test: "Test LIA 1",
      time: 60
    };

    return (
      <div className={classes.wrap}>
        <Paper square className={classes.root} elevation={1}>
          <img className={classes.logo} alt="logo" src={logo} />
          <Typography
            className={classes.headline}
            variant="headline"
            component="h3">
            Welcome to Jobsity Live Coding
          </Typography>
          <Typography className={classes.par} component="p">
            {`Hello ${
              data.candidate
            }!, today we gonna work on a live coding excercise, please
          follow the instructions in the next screen, good luck!`}
          </Typography>
          <Paper square elevation="0" className={classes.subPaper}>
            <Typography className={classes.headline} variant="title">
              JAVASCRIPT
            </Typography>
            <Typography variant="caption">{data.test}</Typography>
            <Typography variant="body2" gutterBottom>
              <FontAwesomeIcon className={classes.icon} icon={faClock} />
              {` ${data.time} minutes`}
            </Typography>
          </Paper>
          <Button
            onClick={this.goToMain}
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            className={classes.button}>
            Start Coding!
          </Button>
          <Typography className={classes.help} variant="caption">
            --- need help? ---
          </Typography>
        </Paper>
        <footer className={classes.footer}>
          <img alt="logo" className={classes.footerLogo} src={footerLogo} />
          <Typography className={classes.footerText}>
            The names and logos for Jobsity are registered trademarks of
            Jobsity, LLC.
          </Typography>
        </footer>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);

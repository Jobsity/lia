import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import logo from "../../assets/img/logo.svg";
import footerLogo from "../../assets/img/jobsity-footer.png";
import styles from "./styles";
import { api } from "../../mockServer";

class Welcome extends Component {
  state = {
    isLoading: true,
    toMain: false,
    chal: false,
    cand: false,
    lock: false,
    challengeData: {},
    candidateData: {}
  };

  componentDidMount() {
    // mock server calls 
    api.get("/challenges/id").then(response => {
      if (response.status === 200) {
        this.setState({ challengeData: response.data.data, chal: true });
      }
    });

    api.get("/candidates/:id").then(response => {
      if (response.status === 200) {
        this.setState({ candidateData: response.data.data, cand: true });
      }
    });
  }

  componentDidUpdate() {
    const { chal, cand, lock } = this.state;

    // this state change only executes once
    if (chal && cand && !lock) {
      console.log("loaded all!");

      // setTimeout just to watch the animation...
      // must be removed when connected to real server
      setTimeout(() =>(this.setState({ isLoading: false, lock: true })), 1000)
      
    }
  }

  goToMain = () => this.setState({ toMain: true });

  render() {
    const { classes } = this.props;
    const { challengeData, candidateData, toMain, isLoading } = this.state;
    const { first_name, last_name } = candidateData;
    const { languages, max_time, name } = challengeData;

    if (toMain) {
      return <Redirect to="/home" />;
    }

    // to be injected in props
    const data = {
      languages,
      candidate: `${first_name} ${last_name}`,
      test: name,
      time: max_time
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
          {isLoading && 
            <CircularProgress classes={{root: classes.loading}} size={200} className={classes.progress} color="secondary" />}
          {!isLoading && (
            <Fragment>
              <Typography className={classes.par} component="p">
                {`Hello ${
                  data.candidate
                }!, today we gonna work on a live coding excercise, please
          follow the instructions in the next screen, good luck!`}
              </Typography>
              <Paper square elevation="0" className={classes.subPaper}>
                {languages.map(lan => (
                  <Typography className={classes.headline} variant="title">
                    {lan.toUpperCase()}
                  </Typography>
                ))}
                <Typography variant="caption">{data.test}</Typography>
                <Typography variant="body2" gutterBottom>
                  <FontAwesomeIcon className={classes.icon} icon={faClock} />
                  {` ${data.time}`}
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
          </Fragment>
        )}
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

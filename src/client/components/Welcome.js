import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import logo from './../assets/img/jobsity-footer.png';
import footerLogo from './../assets/img/jobsity-footer.png';
import store from './../store';
import { FETCH_SESSION_DATA_START } from './../redux/actions';
import { api } from './../../server/mockServer';

const styles = (theme) => ({
  paper: {
    height: 'inherit'
  },
  root: {
    // ...theme.mixins.gutters(),
    position: 'relative',
    top: '12%',
    margin: 'auto',
    maxWidth: '25em',
    padding: '3em'
  },
  wrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#EEEEEE',
    textAlign: 'center'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logo: {
    position: 'absolute',
    top: '-40px',
    right: '210px',
    height: '5em'
  },
  par: {
    padding: '1em 0'
  },
  subPaper: {
    backgroundColor: '#F4F4F4',
    padding: '15px 0'
  },
  icon: {
    color: theme.palette.secondary.main
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    color: 'white',
    fontWeight: 'bold'
  },
  help: {
    marginTop: theme.spacing.unit * 3
  },
  loading: {
    padding: '2em'
  },
  footer: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '6em',
    bottom: 0,
    backgroundColor: theme.palette.primary.main
  },
  footerText: {
    color: '#EEEEEE',
    position: 'relative',
    top: '20px'
  },
  footerLogo: {
    position: 'relative',
    top: '1em',
    height: '1.5em'
  }
});

class Welcome extends Component {
  state = {
    token: this.props.match.params.token,
    isLoading: true,
    chal: false,
    cand: false,
    lock: false,
    challengeData: {},
    candidateData: {}
  };

  componentDidMount() {
    // mock server calls
    api.get('/challenges/id').then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({ challengeData: response.data.data, chal: true });
      }
    });

    api.get('/candidates/:id').then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({ candidateData: response.data.data, cand: true });
      }
    });
    store.dispatch({
      type: FETCH_SESSION_DATA_START,
      payload: { token: this.state.token }
    });
  }

  componentDidUpdate() {
    const { chal, cand, lock } = this.state;

    // this state change only executes once
    if (chal && cand && !lock) {
      console.log('loaded all!');

      // setTimeout just to watch the animation...
      // must be removed when connected to real server
      this.setState({ isLoading: false, lock: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { challengeData, candidateData, isLoading } = this.state;
    const { first_name, last_name } = candidateData;
    const { languages, max_time, name } = challengeData;

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
          {isLoading && (
            <CircularProgress
              classes={{ root: classes.loading }}
              size={200}
              className={classes.progress}
              color="secondary"
            />
          )}
          {!isLoading && (
            <Fragment>
              <Typography className={classes.par} component="p">
                {`Hello ${
                  data.candidate
                }!, today we will work on a live coding exercise. Please
              follow the instructions in the next screen.`}
              </Typography>
              <Typography className={classes.par} component="p">
                Good luck!
              </Typography>
              <Paper square elevation={0} className={classes.subPaper}>
                {languages.map((lan, idx) => (
                  <Typography
                    key={idx}
                    className={classes.headline}
                    variant="title">
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
                onClick={this.props.toggleView}
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

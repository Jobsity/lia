import React from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  loading: {
    position: 'relative',
    top: '0.5em',
    left: '25em'
  }
});

const InstructionsView = ({ data, loading, classes }) => (
  <Paper className={classes.root} elevation={1} square>
    <Typography variant="headline" component="h3">
      Instructions
    </Typography>
    <Divider />
    {loading ? (
      <Typography component="div">
        <CircularProgress
          classes={{ root: classes.loading }}
          size={75}
          color="secondary"
        />
      </Typography>
    ) : (
      <Typography component="div">
        <ReactMarkdown source={data.instructions.split('\n').join('  \n')} />
      </Typography>
    )}
  </Paper>
);

InstructionsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructionsView);

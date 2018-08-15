import React from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

import styles from "./styles";

const InstructionsView = ({ data, loading, classes }) => (
  <Paper className={classes.root} elevation={1} square>
        <Typography variant="headline" component="h3">
        Instructions
        </Typography>
        <Divider />
      { loading
        ? (
          <Typography component="p">
          <CircularProgress
            classes={{ root: classes.loading }}
            size={75}
            color="secondary"
          />
          </Typography>
        ) : (
          <Typography component="p">
          {data.instructions}
        </Typography>
        )
      }
    </Paper>
  );

InstructionsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructionsView);

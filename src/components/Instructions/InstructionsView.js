import React from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./styles";

const InstructionsView = ({ data, loading, classes }) => (
    <div className="panel">
      <div className="title">
        <h1>
          Instructions
        </h1>
      </div>
      { loading
        ? (
          <CircularProgress
            classes={{ root: classes.loading }}
            size={75}
            color="secondary"
          />
        ) : (
          <span>
            {data.instructions}
          </span>
        )
      }
    </div>
  );

InstructionsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructionsView);

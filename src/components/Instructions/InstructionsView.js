import React from 'react';
import { PropTypes } from 'prop-types';

function InstructionsView({ data, loading }) {
  return (
    <div>
      { loading
        ? (
          <span>
            Loading...
          </span>
        )
        : (
          <span>
            {data.instructions}
          </span>
        )
      }
    </div>
  );
}


InstructionsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default InstructionsView;

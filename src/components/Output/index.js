import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OutputView from './OutputView';
import {
  getTestsResults,
  getRunTestsLoading,
  getRunTestsError,
  getSubmitChallengeLoading,
  getSubmitChallengeError,
  getSubmitted,
} from '../../reducers';

function Output({
  testsResults,
  runTestsLoading,
  runTestsError,
  submitChallengeLoading,
  submitChallengeError,
  submitted,
}) {
  return (
    <OutputView
      testsResults={testsResults}
      status={{
        runTestsLoading,
        runTestsError,
        submitChallengeLoading,
        submitChallengeError,
        submitted
      }}
    />
  );
}

Output.propTypes = {
  testsResults: PropTypes.instanceOf(Object),
  runTestsLoading: PropTypes.bool.isRequired,
  runTestsError: PropTypes.string.isRequired,
  submitChallengeLoading: PropTypes.bool.isRequired,
  submitChallengeError: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

Output.defaultProps = {
  testsResults: null,
};

const mapStateToProps = (state) => ({
  testsResults: getTestsResults(state),
  runTestsLoading: getRunTestsLoading(state),
  runTestsError: getRunTestsError(state),
  submitChallengeLoading: getSubmitChallengeLoading(state),
  submitChallengeError: getSubmitChallengeError(state),
  submitted: getSubmitted(state),
});

export default connect(
  mapStateToProps
)(Output);

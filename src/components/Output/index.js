import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OutputView from './OutputView';
import {
  getTestsResults,
  getRunTestsLoading,
  getRunTestsError,
  getSubmitChallengeLoading,
  getSubmitChallengeError,
} from '../../reducers';

class Output extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      passedItemsOpen: false,
      failedItemsOpen: false,
      errorItemsOpen: false,
    };
  }

  toggleOpenCategoryItem(category) {
    const key = `${category}ItemsOpen`;
    this.setState(prevState => ({
      [key]: !prevState[key],
    }));
  }

  render() {
    const {
      testsResults,
      runTestsLoading,
      runTestsError,
      submitChallengeLoading,
      submitChallengeError,
    } = this.props;
    return (
      <OutputView
      handleClickCategoryItem={ category => this.toggleOpenCategoryItem(category)}
        {...this.state}
        testsResults={testsResults}
        status={{
          runTestsLoading,
          runTestsError,
          submitChallengeLoading,
          submitChallengeError,
        }}
      />
    );
  }
}

Output.propTypes = {
  testsResults: PropTypes.instanceOf(Object).isRequired,
  runTestsLoading: PropTypes.bool.isRequired,
  runTestsError: PropTypes.string.isRequired,
  submitChallengeLoading: PropTypes.string.isRequired,
  submitChallengeError: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  testsResults: getTestsResults(state),
  runTestsLoading: getRunTestsLoading(state),
  runTestsError: getRunTestsError(state),
  submitChallengeLoading: getSubmitChallengeLoading(state),
  submitChallengeError: getSubmitChallengeError(state),
});

export default connect(
  mapStateToProps
)(Output);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SampleTestsView from './sampleTestsView';
import { setCurrentLanguage } from  '../../actions/session';
import { updateCurrentTests, resetCurrentTests } from  '../../actions/challenge';
import store from '../../store/store';
import { FETCH_CHALLENGE_DATA_START, RUN_SAMPLE_TESTS_START, SUBMIT_CHALLENGE_START } from '../../actions/types';
import {
  getIsLoading,
  getLanguage,
  getLanguages,
  getTestSuite,
  getDifficulty,
  getCurrentTests,
} from '../../reducers';

class SampleTests extends Component {
  componentDidMount() {
    store.dispatch({ type: FETCH_CHALLENGE_DATA_START });
  }

  handleSelectChange(e) {
    const { setLanguage } = this.props;
    setLanguage(e.target.value);
  }

  handleResetClick() {
    const { resetTests, language } = this.props;
    resetTests(language);
  }

  handleRunTestsClick() {
    store.dispatch({
      type: RUN_SAMPLE_TESTS_START,
      payload: {}
    });
  }

  handleSubmitClick() {
    store.dispatch({
      type: SUBMIT_CHALLENGE_START,
      payload: {}
    });
  }

  handleTestsEditorChange(newValue) {
    const { updateTests } = this.props;
    updateTests(newValue);
  }

  render() {
    const {currentTests, difficulty, isLoading, language, languages, testSuite} = this.props;
    return (
      <SampleTestsView
        handleSelectChange={e => this.handleSelectChange(e)}
        handleResetClick={() => this.handleResetClick()}
        handleRunTestsClick={() => this.handleRunTestsClick()}
        handleSubmitClick={() => this.handleSubmitClick()}
        handleTestsEditorChange={e => this.handleTestsEditorChange(e)}
        tests={{
          currentTests,
          difficulty,
          isLoading,
          language,
          languages,
          testSuite,
        }}
      />
    );
  }
}

SampleTests.propTypes = {
  currentTests: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  testSuite: PropTypes.instanceOf(Array).isRequired,
  setLanguage: PropTypes.func.isRequired,
  updateTests: PropTypes.func.isRequired,
  resetTests: PropTypes.func.isRequired,
}

const mapDispatchToProps = () => ({
  setLanguage: setCurrentLanguage,
  updateTests: updateCurrentTests,
  resetTests: resetCurrentTests,
});

const mapStateToProps = (state) => ({
  currentTests: getCurrentTests(state),
  difficulty: getDifficulty(state),
  isLoading: getIsLoading(state),
  language: getLanguage(state),
  languages: getLanguages(state),
  testSuite: getTestSuite(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SampleTests);
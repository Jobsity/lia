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
  getSubmitted,
} from '../../reducers';

class SampleTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetDialogOpen: false,
      submitDialogOpen: false,
    }
  }

  componentDidMount() {
    store.dispatch({ type: FETCH_CHALLENGE_DATA_START });
  }

  handleSelectChange(e) {
    const { setLanguage } = this.props;
    setLanguage(e.target.value);
  }

  handleReset() {
    const { resetTests, language } = this.props;
    resetTests(language);
    this.setState({ resetDialogOpen: false});
  }

  handleRunTestsClick() {
    store.dispatch({
      type: RUN_SAMPLE_TESTS_START,
      payload: {}
    });
  }

  handleSubmit() {
    store.dispatch({
      type: SUBMIT_CHALLENGE_START,
      payload: {}
    });
    this.setState({ submitDialogOpen: false});
  }

  handleTestsEditorChange(newValue) {
    const { updateTests } = this.props;
    updateTests(newValue);
  }

  handleDialogOpening(dialog) {
    const dialogKey = [`${dialog}DialogOpen`];
    this.setState(prevState => ({ [dialogKey]: !prevState[dialogKey]}));
  }

  render() {
    const {currentTests, difficulty, isLoading, language, languages, testSuite, submitted} = this.props;
    const { resetDialogOpen, submitDialogOpen } = this.state;
    return (
      <SampleTestsView
        handleSelectChange={e => this.handleSelectChange(e)}
        handleResetClick={() => this.handleResetClick()}
        handleRunTestsClick={() => this.handleRunTestsClick()}
        handleSubmitClick={() => this.handleSubmitClick()}
        handleTestsEditorChange={text => this.handleTestsEditorChange(text)}
        handleDialogOpening={(dialog) => this.handleDialogOpening(dialog)}
        handleReset={() => this.handleReset()}
        handleSubmit={() => this.handleSubmit()}
        tests={{
          currentTests,
          difficulty,
          isLoading,
          language,
          languages,
          testSuite,
        }}
        challengeSubmitted={submitted}
        resetDialogOpen={resetDialogOpen}
        submitDialogOpen={submitDialogOpen}
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
  submitted: PropTypes.bool.isRequired,
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
  submitted: getSubmitted(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SampleTests);
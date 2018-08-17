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
  getRunTestsLoading,
  getSubmitChallengeLoading,
  getEditorCode,
} from '../../reducers';

class SampleTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpened: null,
      newSelectedLanguage: '',
    }
  }

  componentDidMount() {
    store.dispatch({ type: FETCH_CHALLENGE_DATA_START });
  }

  handleSelectChange() {
    const { setLanguage } = this.props;
    const { newSelectedLanguage } = this.state;
    setLanguage(newSelectedLanguage);
    this.setState({ dialogOpened: ''});
  }

  handleReset() {
    const { resetTests, language } = this.props;
    resetTests(language);
    this.setState({ dialogOpened: ''});
  }

  handleRunTestsClick() {
    const { editorCode, currentTests, language } = this.props;
    store.dispatch({
      type: RUN_SAMPLE_TESTS_START,
      payload: {
        editorCode,
        tests: currentTests,
        language,
      },
    });
  }

  handleSubmit() {
    const { editorCode, testSuite, language } = this.props;
    store.dispatch({
      type: SUBMIT_CHALLENGE_START,
      payload: {
        editorCode,
        tests: testSuite.filter(tests => tests.language === language)[0].tests,
        language,
      },
    });
    this.setState({ dialogOpened: ''});
  }

  handleTestsEditorChange(newValue) {
    const { updateTests } = this.props;
    updateTests(newValue);
  }

  handleDialogOpening(dialog, e) {
    const dialogKey = [`${dialog}DialogOpen`];
    this.setState(prevState => ({ 
      [dialogKey]: !prevState[dialogKey],
      dialogOpened: (prevState.dialogOpened === dialog) ? '' : dialog,
      newSelectedLanguage: e ? e.target.value : '',
    }));
  }

  render() {
    const {
      currentTests,
      difficulty,
      isLoading,
      language,
      languages,
      testSuite,
      submitted,
      runTestsLoading,
      submitChallengeLoading ,
    } = this.props;
    const { dialogOpened } = this.state;
    return (
      <SampleTestsView
        handleSelectChange={e => this.handleSelectChange(e)}
        handleResetClick={() => this.handleResetClick()}
        handleRunTestsClick={() => this.handleRunTestsClick()}
        handleSubmitClick={() => this.handleSubmitClick()}
        handleTestsEditorChange={text => this.handleTestsEditorChange(text)}
        handleDialogOpening={(dialog, e) => this.handleDialogOpening(dialog, e)}
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
        status={{
          runTestsLoading,
          submitChallengeLoading,
        }}
        dialogHandlers={{
          reset: () => this.handleReset(),
          changeLanguage: () => this.handleSelectChange(),
          submit: () => this.handleSubmit(),
        }}
        dialogOpened={dialogOpened}
        challengeSubmitted={submitted}
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
  runTestsLoading: PropTypes.bool.isRequired,
  submitChallengeLoading : PropTypes.bool.isRequired,
  editorCode: PropTypes.string.isRequired,
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
  runTestsLoading: getRunTestsLoading(state),
  submitChallengeLoading : getSubmitChallengeLoading(state),
  editorCode: getEditorCode(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SampleTests);
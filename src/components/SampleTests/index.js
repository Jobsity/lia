import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SampleTestsView from './sampleTestsView';
import { setCurrentLanguage } from  '../../actions/session';
import { updateCurrentTests, resetEditors, runTests, submitChallenge } from  '../../actions/challenge';
import store from '../../store/store';
import { FETCH_CHALLENGE_DATA_START } from '../../actions/types';
import {
  getIsLoading,
  getLanguage,
  getLanguages,
  getTestSuite,
  getDifficulty,
  getCurrentTests,
  getSubmitted,
  getRunTestsLoading,
  getStartingTime,
  getSubmitChallengeLoading,
  getEditorCode,
} from '../../reducers';

class SampleTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpened: '',
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
    const { resetEditorsCode, language } = this.props;
    resetEditorsCode(language);
    this.setState({ dialogOpened: ''});
  }

  handleRunTestsClick() {
    const { editorCode, currentTests, language, startingTime, run} = this.props;
    run(editorCode, currentTests, language, startingTime);
  }

  handleSubmit() {
    const { editorCode, language, startingTime, testSuite, submit } = this.props;
    submit(editorCode, testSuite, language, startingTime);
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
  resetEditorsCode: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  runTestsLoading: PropTypes.bool.isRequired,
  submitChallengeLoading : PropTypes.bool.isRequired,
  editorCode: PropTypes.string,
  startingTime: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  run: PropTypes.func.isRequired,
}

const mapDispatchToProps = () => ({
  setLanguage: setCurrentLanguage,
  updateTests: updateCurrentTests,
  resetEditorsCode: resetEditors,
  submit: submitChallenge,
  run: runTests,
  editorCode: '',
});

const mapStateToProps = (state) => ({
  currentTests: getCurrentTests(state),
  difficulty: getDifficulty(state),
  isLoading: getIsLoading(state),
  language: getLanguage(state),
  languages: getLanguages(state),
  testSuite: getTestSuite(state),
  startingTime: getStartingTime(state),
  submitted: getSubmitted(state),
  runTestsLoading: getRunTestsLoading(state),
  submitChallengeLoading : getSubmitChallengeLoading(state),
  editorCode: getEditorCode(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SampleTests);
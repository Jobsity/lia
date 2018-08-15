import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SampleTestsView from './sampleTestsView';
import { setCurrentLanguage } from  '../../actions/session';
import store from '../../store/store';
import { FETCH_CHALLENGE_DATA_START } from '../../actions/types';
import { getIsLoading, getLanguage, getLanguages, getTestSuite, getDifficulty } from '../../reducers';

class SampleTests extends Component {
  componentDidMount() {
    store.dispatch({ type: FETCH_CHALLENGE_DATA_START });
  }

  handleSelectChange(e) {
    const { setLanguage } = this.props;
    setLanguage(e.target.value);
  }

  handleButtonClick() {
    console.log('Here the editor code will be sent to the API and the results retrieved, and then an action will be dispatched')
  }

  render() {
    const {difficulty, isLoading, language, languages, testSuite} = this.props;
    return (
      <SampleTestsView
        handleSelectChange={e => this.handleSelectChange(e)}
        handleButtonClick={() => this.handleButtonClick()}
        {...this.state}
        tests={{
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
  isLoading: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  testSuite: PropTypes.instanceOf(Array).isRequired,
  difficulty: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

const mapDispatchToProps = () => ({
  setLanguage: setCurrentLanguage,
});

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  language: getLanguage(state),
  languages: getLanguages(state),
  testSuite: getTestSuite(state),
  difficulty: getDifficulty(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SampleTests);
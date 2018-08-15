import React, { Component } from 'react';
import { connect } from 'react-redux';
import SampleTestsView from './sampleTestsView';
import { api } from '../../mockServer';
import * as challengeActions from '../../actions/challenge';
import store from '../../store/store';
import { FETCH_CHALLENGE_DATA_START } from '../../actions/types';

const editorCode = 'const x = 1;\\nconsole.log(x);';

class SampleTests extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      data: {},
      selectedLang: 'javascript',
    };
  }

  componentDidMount() {
    api.get('/challenges/id').then((response) => {
      if (response.status === 200) {
        this.setState({ data: response.data.data, selectedLang: response.data.data.languages[0], loading: false });
      }
    });
    store.dispatch({ type: FETCH_CHALLENGE_DATA_START });
  }

  handleSelectChange(e) {
    this.setState({selectedLang: e.target.value});
  }

  handleButtonClick() {
    const { getTestsResults } = this.props;
    const { data, selectedLang } = this.state;
    const testsSamples = data.testSuite.filter( tests => tests.language === selectedLang)[0];
    getTestsResults(editorCode, testsSamples , selectedLang, api);
  }

  render() {
    return (
      <SampleTestsView
        handleSelectChange={e => this.handleSelectChange(e)}
        handleButtonClick={() => this.handleButtonClick()}
        {...this.state}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTestsResults: challengeActions.getTestsResults,
  }
}

export default connect(
  mapDispatchToProps,
)(SampleTests);
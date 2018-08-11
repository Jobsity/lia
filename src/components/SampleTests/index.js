import React, { Component } from 'react';
import { connect } from 'react-redux';
import SampleTestsView from './sampleTestsView';
import { api } from '../../mockServer';

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
  }

  handleSelectChange(e) {
    this.setState({selectedLang: e.target.value});
  }

  handleButtonClick() {
    console.log(`Here the editor code from the store will be retrieved and sended to the API, and then saved in the store`);
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
    evaluateCode: (code, tests, language) => {
      
    }
  }
}

export default connect(
  mapDispatchToProps
)(SampleTests);
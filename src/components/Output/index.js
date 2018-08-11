import React, { Component } from 'react';
import OutputView from './OutputView';

class Instructions extends Component {
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
    this.setState({
      [`${category}ItemsOpen`]: !this.state[`${category}ItemsOpen`],
    });
  }

  render() {
    return (
      <OutputView
      handleClickCategoryItem={ category => this.toggleOpenCategoryItem(category)}
        {...this.state}
      />
    );
  }
}

export default Instructions;

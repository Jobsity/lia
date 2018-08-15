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
    const key = `${category}ItemsOpen`;
    this.setState(prevState => ({
      [key]: !prevState[key],
    }));
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

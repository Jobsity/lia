import React from 'react';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import Instructions from './index';
import { api } from '../../mockServer';
import store from '../../store/store';

const mock = new MockAdapter(api);
mock.onGet('/challenge').reply(200, {
  data: {
    instructions: 'These are test instructions',
  },
});

test('Component loading', () => {
  let props;
  let mountedInstructions;

  const InstructionsMock = () => {
    if (!mountedInstructions) {
      mountedInstructions = mount(
        <Provider store={store}>
          <Instructions {...props} />
        </Provider>,
      );
    }
    return mountedInstructions;
  };

  beforeEach(() => {
    props = {
      loading: false,
      data: {},
    };
  });

  it('Always renders a div', () => {
    const divs = InstructionsMock().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});

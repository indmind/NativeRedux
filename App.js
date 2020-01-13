import React, {Component} from 'react';
import {View} from 'native-base';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Wrapper from './src/components/Wrapper';
import Counter from './src/components/Counter';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }

  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: 600,
            }}>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
          </View>
        </Wrapper>
      </Provider>
    );
  }
}

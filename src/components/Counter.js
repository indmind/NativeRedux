import React, {Component} from 'react';
import {
  View,
  Container,
  Header,
  Text,
  Title,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Content,
  Footer,
  FooterTab,
  Form,
  Input,
  Item,
} from 'native-base';

import {connect} from 'react-redux';
import {TouchableOpacity, StyleSheet} from 'react-native';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

let increaseInterval;
let decreaseInterval;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Counter extends Component {
    startMultipleDecrease() {
      increaseInterval = setInterval(this.props.decreaseCounter, 100);
    }
    stopMultipleDecease() {
      clearInterval(increaseInterval);
    }

    startMultipleIncrease() {
      decreaseInterval = setInterval(this.props.increaseCounter, 100);
    }
    stopMultipleIncrease() {
      clearInterval(decreaseInterval);
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, styles.red]}
            onPress={this.props.decreaseCounter}
            onLongPress={this.startMultipleDecrease.bind(this)}
            onPressOut={this.stopMultipleDecease.bind(this)}>
            <Text style={styles.white}>-</Text>
          </TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity
            style={[styles.button, styles.green]}
            onPress={this.props.increaseCounter}
            onLongPress={this.startMultipleIncrease.bind(this)}
            onPressOut={this.stopMultipleIncrease.bind(this)}>
            <Text style={styles.white}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  white: {
    color: 'white',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

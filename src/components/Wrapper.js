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

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(
  class Wrapper extends Component {
    render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Rocket! {this.props.counter}</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="rocket" />
              </Button>
            </Right>
          </Header>
          <Content padder>{this.props.children}</Content>
          <Footer>
            <FooterTab>
              <Button>
                <Text>Footer</Text>
              </Button>
              <Button>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
  },
);

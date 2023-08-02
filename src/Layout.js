import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { TopBar } from './TopBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <div id="layout-div" >
            <TopBar />
            <Container id="main-container" tag="main">
                {this.props.children}
            </Container>
        </div>
    );
  }
}

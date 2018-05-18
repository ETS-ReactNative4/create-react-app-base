import React from 'react';
import { Button, ButtonGroup } from '../../../components/common';

export default class Example extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}

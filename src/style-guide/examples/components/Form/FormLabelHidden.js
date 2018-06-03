import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'components/Common'

export default class FormLabelHidden extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmailFormLabelHidden" hidden>
            Email
          </Label>
          <Input type="email" name="email" id="exampleEmailFormLabelHidden" placeholder="Email" />
        </FormGroup>{' '}
        <FormGroup>
          <Label for="examplePasswordFormLabelHidden" hidden>
            Password
          </Label>
          <Input type="password" name="password" id="examplePasswordFormLabelHidden" placeholder="Password" />
        </FormGroup>{' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}
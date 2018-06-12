import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'components/Common'

export default class FormInputType extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmailFormInputType1">Plain Text (Static)</Label>
          <Input plaintext>Some plain text/ static value</Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmailFormInputType2">Email</Label>
          <Input type="email" name="email" id="exampleEmailFormInputType2" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePasswordFormInputType">Password</Label>
          <Input type="password" name="password" id="examplePasswordFormInputType" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Url</Label>
          <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectFormInputType">Select</Label>
          <Input type="select" name="select" id="exampleSelectFormInputType">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMultiFormInputType">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMultiFormInputType" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleTextFormInputType">Text Area</Label>
          <Input type="textarea" name="text" id="exampleTextFormInputType" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFileFormInputType">File</Label>
          <Input type="file" name="file" id="exampleFileFormInputType" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a
            new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" /> Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
      </Form>
    )
  }
}
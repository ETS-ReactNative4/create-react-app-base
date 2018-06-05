webpackJsonp([180],{132:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default='import React from \'react\'\nimport { Button, Form, FormGroup, Label, Input, FormText } from \'components/Common\'\n\nexport default class FormDefault extends React.Component {\n  render() {\n    return (\n      <Form>\n        <FormGroup>\n          <Label for="exampleEmailFormDefault">Email</Label>\n          <Input type="email" name="email" id="exampleEmailFormDefault" placeholder="with a placeholder" />\n        </FormGroup>\n        <FormGroup>\n          <Label for="examplePasswordFormDefault">Password</Label>\n          <Input type="password" name="password" id="examplePasswordFormDefault" placeholder="password placeholder" />\n        </FormGroup>\n        <FormGroup>\n          <Label for="exampleSelectFormDefault1">Select</Label>\n          <Input type="select" name="select" id="exampleSelectFormDefault1">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </Input>\n        </FormGroup>\n        <FormGroup>\n          <Label for="exampleSelectMultiFormDefault">Select Multiple</Label>\n          <Input type="select" name="selectMulti" id="exampleSelectMultiFormDefault" multiple>\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </Input>\n        </FormGroup>\n        <FormGroup>\n          <Label for="exampleTextFormDefault">Text Area</Label>\n          <Input type="textarea" name="text" id="exampleTextFormDefault" />\n        </FormGroup>\n        <FormGroup>\n          <Label for="exampleFileFormDefault">File</Label>\n          <Input type="file" name="file" id="exampleFileFormDefault" />\n          <FormText color="muted">\n            This is some placeholder block-level help text for the above input. It\'s a bit lighter and easily wraps to a\n            new line.\n          </FormText>\n        </FormGroup>\n        <FormGroup tag="fieldset">\n          <legend>Radio Buttons</legend>\n          <FormGroup check>\n            <Label check>\n              <Input type="radio" name="radio1" /> Option one is this and that\u2014be sure to include why it\'s great\n            </Label>\n          </FormGroup>\n          <FormGroup check>\n            <Label check>\n              <Input type="radio" name="radio1" /> Option two can be something else and selecting it will deselect\n              option one\n            </Label>\n          </FormGroup>\n          <FormGroup check disabled>\n            <Label check>\n              <Input type="radio" name="radio1" disabled /> Option three is disabled\n            </Label>\n          </FormGroup>\n        </FormGroup>\n        <FormGroup check>\n          <Label check>\n            <Input type="checkbox" /> Check me out\n          </Label>\n        </FormGroup>\n        <Button>Submit</Button>\n      </Form>\n    )\n  }\n}\n'}});
//# sourceMappingURL=180.6765c4e9.chunk.js.map
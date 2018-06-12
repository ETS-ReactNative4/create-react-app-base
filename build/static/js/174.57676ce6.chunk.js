webpackJsonp([174],{146:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default='import React from \'react\'\nimport {\n  InputGroup,\n  InputGroupAddon,\n  InputGroupButtonDropdown,\n  Input,\n  Button,\n  DropdownToggle,\n  DropdownMenu,\n  DropdownItem\n} from \'components/Common\'\n\nexport default class FormInputGroupButton extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggleDropDown = this.toggleDropDown.bind(this)\n    this.toggleSplit = this.toggleSplit.bind(this)\n    this.state = {\n      dropdownOpen: false,\n      splitButtonOpen: false\n    }\n  }\n\n  toggleDropDown() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  toggleSplit() {\n    this.setState({\n      splitButtonOpen: !this.state.splitButtonOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <InputGroup>\n          <InputGroupAddon addonType="prepend">\n            <Button>I\'m a button</Button>\n          </InputGroupAddon>\n          <Input />\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <Input />\n          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>\n            <DropdownToggle caret>Button Dropdown</DropdownToggle>\n            <DropdownMenu>\n              <DropdownItem header>Header</DropdownItem>\n              <DropdownItem disabled>Action</DropdownItem>\n              <DropdownItem>Another Action</DropdownItem>\n              <DropdownItem divider />\n              <DropdownItem>Another Action</DropdownItem>\n            </DropdownMenu>\n          </InputGroupButtonDropdown>\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>\n            <Button outline>Split Button</Button>\n            <DropdownToggle split outline />\n            <DropdownMenu>\n              <DropdownItem header>Header</DropdownItem>\n              <DropdownItem disabled>Action</DropdownItem>\n              <DropdownItem>Another Action</DropdownItem>\n              <DropdownItem divider />\n              <DropdownItem>Another Action</DropdownItem>\n            </DropdownMenu>\n          </InputGroupButtonDropdown>\n          <Input placeholder="and..." />\n          <InputGroupAddon addonType="append">\n            <Button color="secondary">I\'m a button</Button>\n          </InputGroupAddon>\n        </InputGroup>\n      </div>\n    )\n  }\n}\n'}});
//# sourceMappingURL=174.57676ce6.chunk.js.map
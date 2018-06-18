(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{519:function(n,o,e){"use strict";e.r(o);o.default="import React from 'react'\nimport { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nexport default class DropdownDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState(prevState => ({\n      dropdownOpen: !prevState.dropdownOpen\n    }))\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>Dropdown</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    )\n  }\n}\n"}}]);
//# sourceMappingURL=67.6d1af5af.chunk.js.map
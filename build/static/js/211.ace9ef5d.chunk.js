webpackJsonp([211], {
  101: function(n, o, t) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      "import React from 'react'\nimport { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nexport default class ButtonDropdownDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>Button Dropdown</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}\n"
  }
})
//# sourceMappingURL=211.ace9ef5d.chunk.js.map

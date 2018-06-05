webpackJsonp([209], {
  103: function(n, o, t) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      'import React from \'react\'\nimport { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from \'components/Common\'\n\nexport default class ButtonDropdownMultiSplit extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <Button id="caret" color="primary">\n          Dropdown\n        </Button>\n        <DropdownToggle split color="primary" />\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=209.db1806fd.chunk.js.map

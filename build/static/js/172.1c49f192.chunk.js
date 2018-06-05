webpackJsonp([172], {
  140: function(n, o, t) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      "import React from 'react'\nimport { InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nclass FormInputGroupButtonDropdown extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <InputGroupButtonDropdown addonType=\"append\" isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>Button Dropdown</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </InputGroupButtonDropdown>\n    )\n  }\n}\n\nexport default FormInputGroupButtonDropdown\n"
  }
})
//# sourceMappingURL=172.1c49f192.chunk.js.map

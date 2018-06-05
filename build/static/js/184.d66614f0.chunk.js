webpackJsonp([184], {
  128: function(n, o, e) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      "import React from 'react'\nimport { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nexport default class DropdownSizing extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} {...this.props}>\n        <DropdownToggle caret>Dropdown</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem>Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    )\n  }\n}\n"
  }
})
//# sourceMappingURL=184.d66614f0.chunk.js.map

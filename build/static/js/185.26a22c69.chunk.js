webpackJsonp([185], {
  127: function(n, o, e) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      "import React from 'react'\nimport { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'\n\nexport default class DropdownDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState(prevState => ({\n      dropdownOpen: !prevState.dropdownOpen\n    }))\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>Dropdown</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    )\n  }\n}\n"
  }
})
//# sourceMappingURL=185.26a22c69.chunk.js.map

webpackJsonp([143], {
  169: function(n, e, o) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    e.default =
      'import React from \'react\'\nimport { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from \'components/Common\'\n\nexport default class NavPills extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Nav pills>\n          <NavItem>\n            <NavLink href="/" active>\n              Link\n            </NavLink>\n          </NavItem>\n          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n            <DropdownToggle nav caret>\n              Dropdown\n            </DropdownToggle>\n            <DropdownMenu>\n              <DropdownItem header>Header</DropdownItem>\n              <DropdownItem disabled>Action</DropdownItem>\n              <DropdownItem>Another Action</DropdownItem>\n              <DropdownItem divider />\n              <DropdownItem>Another Action</DropdownItem>\n            </DropdownMenu>\n          </Dropdown>\n          <NavItem>\n            <NavLink href="/">Link</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="/">Another Link</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink disabled href="/">\n              Disabled Link\n            </NavLink>\n          </NavItem>\n        </Nav>\n      </div>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=143.93ee2d82.chunk.js.map

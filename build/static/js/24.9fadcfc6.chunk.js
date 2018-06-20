(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{477:function(n,o,e){"use strict";e.r(o);o.default='import React, { PureComponent } from \'react\'\n\nimport { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from \'components/Common\'\n\nclass NavPills extends PureComponent {\n  state = {\n    dropdownOpen: false\n  }\n\n  toggle() {\n    this.setState(prevState => ({\n      dropdownOpen: !prevState.dropdownOpen\n    }))\n  }\n\n  render() {\n    return (\n      <Nav pills>\n        <NavItem>\n          <NavLink href="/" active>\n            Link\n          </NavLink>\n        </NavItem>\n        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </Dropdown>\n        <NavItem>\n          <NavLink href="/">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="/">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href="/">\n            Disabled Link\n          </NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}\n\nexport default NavPills\n'}}]);
//# sourceMappingURL=24.9fadcfc6.chunk.js.map
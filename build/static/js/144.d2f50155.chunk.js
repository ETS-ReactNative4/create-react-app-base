webpackJsonp([144], {
  168: function(a, n, t) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      'import React from \'react\'\nimport { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from \'components/Common\'\n\nexport default class NavNavbarTogglerDefault extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggleNavbar = this.toggleNavbar.bind(this)\n    this.state = {\n      collapsed: true\n    }\n  }\n\n  toggleNavbar() {\n    this.setState({\n      collapsed: !this.state.collapsed\n    })\n  }\n  render() {\n    return (\n      <div>\n        <Navbar color="faded" light>\n          <NavbarBrand href="/" className="mr-auto">\n            reactstrap\n          </NavbarBrand>\n          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />\n          <Collapse isOpen={!this.state.collapsed} navbar timeout={0}>\n            <Nav navbar>\n              <NavItem>\n                <NavLink href="/components/">Components</NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>\n              </NavItem>\n            </Nav>\n          </Collapse>\n        </Navbar>\n      </div>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=144.d2f50155.chunk.js.map

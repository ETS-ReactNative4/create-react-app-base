webpackJsonp([141],{171:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default='import React from \'react\'\nimport { Nav, NavItem, NavLink } from \'components/Common\'\n\nexport default class NavVertical extends React.Component {\n  render() {\n    return (\n      <div>\n        <p>List Based</p>\n        <Nav vertical>\n          <NavItem>\n            <NavLink href="/">Link</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="/">Link</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="/">Another Link</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink disabled href="/">\n              Disabled Link\n            </NavLink>\n          </NavItem>\n        </Nav>\n        <hr />\n        <p>Link based</p>\n        <Nav vertical>\n          <NavLink href="/">Link</NavLink> <NavLink href="/">Link</NavLink> <NavLink href="/">Another Link</NavLink>{\' \'}\n          <NavLink disabled href="/">\n            Disabled Link\n          </NavLink>\n        </Nav>\n      </div>\n    )\n  }\n}\n'}});
//# sourceMappingURL=141.837a395f.chunk.js.map
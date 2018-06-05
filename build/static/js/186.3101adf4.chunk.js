webpackJsonp([186], {
  126: function(n, o, t) {
    'use strict'
    Object.defineProperty(o, '__esModule', { value: !0 })
    o.default =
      'import React from \'react\'\nimport { Dropdown, DropdownMenu, DropdownToggle } from \'components/Common\'\n\nexport default class DropDownCustom extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      dropdownOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>\n          Custom Dropdown Content\n        </DropdownToggle>\n        <DropdownMenu>\n          <div onClick={this.toggle}>Custom dropdown item</div>\n          <div onClick={this.toggle}>Custom dropdown item</div>\n          <div onClick={this.toggle}>Custom dropdown item</div>\n          <div onClick={this.toggle}>Custom dropdown item</div>\n        </DropdownMenu>\n      </Dropdown>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=186.3101adf4.chunk.js.map

webpackJsonp([118], {
  194: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    e.default =
      '/* eslint react/no-multi-comp: 0, react/prop-types: 0 */\nimport React from \'react\'\nimport { Tooltip } from \'components/Common\'\n\nexport default class TooltipAutoHide extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.toggle = this.toggle.bind(this)\n    this.state = {\n      tooltipOpen: false\n    }\n  }\n\n  toggle() {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          Sometimes you need to allow users to select text within a{\' \'}\n          <a href="/" id="DisabledAutoHideTooltipAutoHide">\n            tooltip\n          </a>.\n        </p>\n        <Tooltip\n          placement="top"\n          isOpen={this.state.tooltipOpen}\n          autohide={false}\n          target="DisabledAutoHideTooltipAutoHide"\n          toggle={this.toggle}>\n          Try to select this text!\n        </Tooltip>\n      </div>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=118.a5b4020b.chunk.js.map

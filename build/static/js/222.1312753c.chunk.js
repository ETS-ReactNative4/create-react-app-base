webpackJsonp([222], {
  90: function(s, n, e) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      "import React from 'react'\nimport { Alert } from 'components/Common'\n\nclass AlertDismiss extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      visible: true\n    }\n\n    this.onDismiss = this.onDismiss.bind(this)\n  }\n\n  onDismiss() {\n    this.setState({ visible: false })\n  }\n\n  render() {\n    return (\n      <Alert color=\"info\" isOpen={this.state.visible} toggle={this.onDismiss}>\n        I am an alert and I can be dismissed!\n      </Alert>\n    )\n  }\n}\n\n// AlertDismiss.displayName = 'Alert - Dismiss'\n\nexport default AlertDismiss\n"
  }
})
//# sourceMappingURL=222.1312753c.chunk.js.map

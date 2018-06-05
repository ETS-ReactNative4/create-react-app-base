webpackJsonp([182], {
  130: function(t, n, e) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      'import React from \'react\'\nimport { Button, Fade } from \'components/Common\'\n\nexport default class FadeDefault extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { fadeIn: true }\n    this.toggle = this.toggle.bind(this)\n  }\n\n  render() {\n    return (\n      <div>\n        <Button color="primary" onClick={this.toggle}>\n          Toggle Fade\n        </Button>\n        <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={0}>\n          This content will fade in and out as the button is pressed\n        </Fade>\n      </div>\n    )\n  }\n\n  toggle() {\n    this.setState({\n      fadeIn: !this.state.fadeIn\n    })\n  }\n}\n'
  }
})
//# sourceMappingURL=182.7df4a14c.chunk.js.map

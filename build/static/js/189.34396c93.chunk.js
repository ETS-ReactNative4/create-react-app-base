webpackJsonp([189], {
  123: function(e, n, t) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      "import React, { Component } from 'react'\nimport { Collapse, Button, CardBody, Card } from 'components/Common'\n\nclass CollapseDefault extends Component {\n  constructor(props) {\n    super(props)\n    this.toggle = this.toggle.bind(this)\n    this.state = { collapse: false }\n  }\n\n  toggle() {\n    this.setState({ collapse: !this.state.collapse })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button color=\"primary\" onClick={this.toggle} style={{ marginBottom: '1rem' }}>\n          Toggle\n        </Button>\n        <Collapse isOpen={this.state.collapse} timeout={0}>\n          <Card>\n            <CardBody>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim\n              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n            </CardBody>\n          </Card>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nexport default CollapseDefault\n"
  }
})
//# sourceMappingURL=189.34396c93.chunk.js.map

webpackJsonp([163], {
  149: function(o, n, l) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.default =
      'import React from \'react\'\nimport { Container, Row, Col } from \'components/Common\'\n\nexport default class LayoutDefault extends React.Component {\n  render() {\n    return (\n      <Container>\n        <Row>\n          <Col>.col</Col>\n        </Row>\n        <Row>\n          <Col>.col</Col>\n          <Col>.col</Col>\n          <Col>.col</Col>\n          <Col>.col</Col>\n        </Row>\n        <Row>\n          <Col xs="3">.col-3</Col>\n          <Col xs="auto">.col-auto - variable width content</Col>\n          <Col xs="3">.col-3</Col>\n        </Row>\n        <Row>\n          <Col xs="6">.col-6</Col>\n          <Col xs="6">.col-6</Col>\n        </Row>\n        <Row>\n          <Col xs="6" sm="4">\n            .col-6 .col-sm-4\n          </Col>\n          <Col xs="6" sm="4">\n            .col-6 .col-sm-4\n          </Col>\n          <Col sm="4">.col-sm-4</Col>\n        </Row>\n        <Row>\n          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>\n        </Row>\n        <Row>\n          <Col sm="12" md={{ size: 8, offset: 2 }}>\n            .col-sm-12 .col-md-6 .col-md-offset-3\n          </Col>\n        </Row>\n        <Row>\n          <Col sm={{ size: \'auto\', offset: 1 }}>.col-sm .col-sm-offset-1</Col>\n          <Col sm={{ size: \'auto\', offset: 1 }}>.col-sm .col-sm-offset-1</Col>\n        </Row>\n      </Container>\n    )\n  }\n}\n'
  }
})
//# sourceMappingURL=163.408c5379.chunk.js.map

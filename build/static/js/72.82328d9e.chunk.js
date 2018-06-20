(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{525:function(e,n,t){"use strict";t.r(n);n.default="import React, { Fragment, PureComponent } from 'react'\n\nimport { Collapse, Button, CardBody, Card } from 'components/Common'\n\nclass CollapseDefault extends PureComponent {\n  state = { collapse: false }\n\n  toggle() {\n    this.setState(prevState => ({ collapse: !prevState.collapse }))\n  }\n\n  render() {\n    return (\n      <Fragment>\n        <Button color=\"primary\" onClick={() => this.toggle()} style={{ marginBottom: '1rem' }}>\n          Toggle\n        </Button>\n        <Collapse isOpen={this.state.collapse} timeout={0}>\n          <Card>\n            <CardBody>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim\n              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n            </CardBody>\n          </Card>\n        </Collapse>\n      </Fragment>\n    )\n  }\n}\n\nexport default CollapseDefault\n"}}]);
//# sourceMappingURL=72.82328d9e.chunk.js.map
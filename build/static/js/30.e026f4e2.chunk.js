(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{483:function(n,t,o){"use strict";o.r(t);t.default="import React, { Fragment, PureComponent } from 'react'\n\nimport { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'components/Common'\n\nclass ModalExternal extends PureComponent {\n  state = {\n    modal: false\n  }\n\n  toggle() {\n    this.setState(prevState => ({\n      modal: !prevState.modal\n    }))\n  }\n\n  render() {\n    const externalCloseBtn = (\n      <button\n        className=\"close\"\n        style={{ position: 'absolute', top: '15px', right: '15px' }}\n        onClick={() => this.toggle()}>\n        &times;\n      </button>\n    )\n    return (\n      <Fragment>\n        <Button color=\"danger\" onClick={() => this.toggle()}>\n          Modal\n        </Button>\n        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} external={externalCloseBtn}>\n          <ModalHeader>Modal title</ModalHeader>\n          <ModalBody>\n            <b>Look at the top right of the page/viewport!</b>\n            <br />\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n          </ModalBody>\n          <ModalFooter>\n            <Button color=\"primary\" onClick={() => this.toggle()}>\n              Do Something\n            </Button>{' '}\n            <Button color=\"secondary\" onClick={() => this.toggle()}>\n              Cancel\n            </Button>\n          </ModalFooter>\n        </Modal>\n      </Fragment>\n    )\n  }\n}\n\nexport default ModalExternal\n"}}]);
//# sourceMappingURL=30.e026f4e2.chunk.js.map
webpackJsonp([150], {
  162: function(o, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.default =
      '/* eslint react/no-multi-comp: 0, react/prop-types: 0 */\n\nimport React from \'react\'\nimport { Button, Modal, ModalHeader, ModalBody, ModalFooter } from \'components/Common\'\n\nclass ModalDefault extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      modal: false\n    }\n\n    this.toggle = this.toggle.bind(this)\n  }\n\n  toggle() {\n    this.setState({\n      modal: !this.state.modal\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button color="danger" onClick={this.toggle}>\n          Modal\n        </Button>\n        <Modal isOpen={this.state.modal} toggle={this.toggle}>\n          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>\n          <ModalBody>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n          </ModalBody>\n          <ModalFooter>\n            <Button color="primary" onClick={this.toggle}>\n              Do Something\n            </Button>{\' \'}\n            <Button color="secondary" onClick={this.toggle}>\n              Cancel\n            </Button>\n          </ModalFooter>\n        </Modal>\n      </div>\n    )\n  }\n}\n\nexport default ModalDefault\n'
  }
})
//# sourceMappingURL=150.2bda5827.chunk.js.map

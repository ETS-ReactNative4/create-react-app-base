import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'components/Common'
import config from '../../config'

storiesOf('Modal', module)
  .addDecorator(config.wrapper)
  .add(
    'CustomTimeout',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Open Modal
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 20 }}
          backdropTransition={{ timeout: 10 }}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    ))
  )

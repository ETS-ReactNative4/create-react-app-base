const DropdownSizingCode = `import React, { PureComponent } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'

class DropdownSizing extends PureComponent {
  state = {
    dropdownOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} {...this.props}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropdownSizing
`

export default DropdownSizingCode

import { Input as ReactStrapInput } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Input = props => {
  return (
    <ThemeImporter>
      <ReactStrapInput {...props} />
    </ThemeImporter>
  )
}

Input.propTypes = ReactStrapInput.propTypes

export default Input

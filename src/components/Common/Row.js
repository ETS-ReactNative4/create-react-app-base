import { Row as ReactStrapRow } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Row = props => {
  return (
    <ThemeImporter>
      <ReactStrapRow {...props} />
    </ThemeImporter>
  )
}

Row.propTypes = ReactStrapRow.propTypes

export default Row
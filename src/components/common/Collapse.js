import { Collapse as ReactStrapCollapse } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Collapse = props => {
  return (
    <ThemeImporter>
      <ReactStrapCollapse {...props} />
    </ThemeImporter>
  )
}

Collapse.propTypes = ReactStrapCollapse.propTypes

export default Collapse

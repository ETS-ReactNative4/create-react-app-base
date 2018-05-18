import { UncontrolledTooltip as ReactStrapUncontrolledTooltip } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledTooltip = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolledtooltip">
        <ReactStrapUncontrolledTooltip {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledTooltip.propTypes = ReactStrapUncontrolledTooltip.propTypes

export default UncontrolledTooltip

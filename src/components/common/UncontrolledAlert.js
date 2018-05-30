import { UncontrolledAlert as ReactStrapUncontrolledAlert } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const UncontrolledAlert = props => {
  return (
    <ThemeImporter sassNames={['_alert']}>
      <ReactStrapUncontrolledAlert {...props} />
    </ThemeImporter>
  )
}

UncontrolledAlert.propTypes = ReactStrapUncontrolledAlert.propTypes

export default UncontrolledAlert

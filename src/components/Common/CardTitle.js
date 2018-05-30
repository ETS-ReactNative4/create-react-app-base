import { CardTitle as ReactStrapCardTitle } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardTitle = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardTitle {...props} />
    </ThemeImporter>
  )
}

CardTitle.propTypes = ReactStrapCardTitle.propTypes

export default CardTitle
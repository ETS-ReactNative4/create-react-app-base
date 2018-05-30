import { CardText as ReactStrapCardText } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardText = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardText {...props} />
    </ThemeImporter>
  )
}

CardText.propTypes = ReactStrapCardText.propTypes

export default CardText
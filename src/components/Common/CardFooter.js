import { CardFooter as ReactStrapCardFooter } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardFooter = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardFooter {...props} />
    </ThemeImporter>
  )
}

CardFooter.propTypes = ReactStrapCardFooter.propTypes

export default CardFooter
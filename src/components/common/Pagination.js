import { Pagination as ReactStrapPagination } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Pagination = props => {
  return (
    <Fragment>
      <ThemeImporter path="_pagination">
        <ReactStrapPagination {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Pagination.propTypes = ReactStrapPagination.propTypes

export default Pagination

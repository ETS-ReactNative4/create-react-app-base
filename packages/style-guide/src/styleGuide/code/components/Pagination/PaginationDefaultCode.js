const PaginationDefaultCode = `import React from 'react'

import { Pagination, PaginationItem, PaginationLink } from 'components/Common'

const PaginationDefault = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="/" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="/" />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationDefault
`

export default PaginationDefaultCode

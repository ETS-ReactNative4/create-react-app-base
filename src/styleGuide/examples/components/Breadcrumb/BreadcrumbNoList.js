import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'components/Common'

const BreadcrumbNoList = props => {
  return (
    <div>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbNoList
import React from 'react'
import { getText } from '../locales'

const CatalogHeader = () => {
  return (
    <div className='CatalogHeader Headers'>
        <h1>{getText("ourProducts")}</h1>
    </div>
  )
}

export default CatalogHeader
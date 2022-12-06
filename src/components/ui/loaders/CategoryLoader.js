import React from 'react'
import ContentLoader from 'react-content-loader'
import { ArrowDownCircle } from 'react-feather'

export const CategoryLoader = props => {
    return (
      <ContentLoader
        height={120}
        width={960}
        speed={1}
        column={5}
        {...props}
      >
        <circle cx="80" cy="60" r="50" />
      </ContentLoader>
    )
}
CategoryLoader.metadata = {
  name: 'PhátMai', // My name
  github: 'lPaths', // Github username
  description: 'CategoryLoader', // Little tagline
  filename: 'CategoryLoader', // filename of your loader
}
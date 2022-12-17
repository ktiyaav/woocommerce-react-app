import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '../../../utils/windowSize'

const SingleProductLoader = props => {

  const { height, width } = useWindowDimensions();
  const viewBox = '0 0 '+width+ ' ' + height ;
  console.log(props)
  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox= {viewBox}
      backgroundColor="rgb(238 235 235)"
      foregroundColor="#ededed"
      {...props}
    >
    <rect x="15" y="100" rx="3" ry="3" width={width-30} height="400" />
    <rect x="15" y="520" rx="3" ry="3" width={width/3} height="50" />
    <rect x="15" y="590" rx="3" ry="3" width={width-30} height="50" />
    </ContentLoader>
  )
}

SingleProductLoader.metadata = {
  name: 'Shakti Saurav',
  github: '7IG3R',
  description: 'A simple product detail page loader',
  filename: 'SingleProductLoader',
}

export default SingleProductLoader
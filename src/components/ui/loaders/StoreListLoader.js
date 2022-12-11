import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '../../../utils/windowSize'

const StoreListLoader = props => {
  const { height, width } = useWindowDimensions();
  const viewBox = '0 0 '+width+' 130';
  return (
    <>
    <ContentLoader
      speed={2}
      width={width-10}
      height={130}
      viewBox={viewBox}
      {...props}
    >
    <rect x="15" y="10" rx="0" ry="0" width="100" height="80" />
    <rect x="125" y="12" rx="0" ry="0" width="100" height="20" />
    <rect x="125" y="45" rx="0" ry="0" width="150" height="10" />
    <rect x="125" y="70" rx="0" ry="0" width="400" height="15" />
    </ContentLoader>
    </>
    
  )
}

StoreListLoader.metadata = {
  name: 'Shakti Saurav',
  github: '7IG3R',
  description: 'Loading a list of orders.',
  filename: 'StoreListLoader',
}

export default StoreListLoader
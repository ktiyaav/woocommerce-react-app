import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '../../../utils/windowSize'
const AccountLoader = props => {
  const { height, width } = useWindowDimensions();
  const viewBox = '0 0 '+width+' 130';
  return (
    <>
    <ContentLoader
      speed={2}
      width={width - 10}
      height={height}
      viewBox= {viewBox}
      backgroundColor="rgb(238 235 235)"
      foregroundColor="#ededed"
      {...props}
    >

    <rect x={width-40} y="75" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="65" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="105" rx="3" ry="3" width={width/1.5} height="10" />

    <rect x={width-40} y="150" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="140" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="175" rx="3" ry="3" width={width/1.5} height="10" />


    <rect x={width-40} y="225" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="220" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="255" rx="3" ry="3" width={width/1.5} height="10" />


    <rect x={width-40} y="150" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="140" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="175" rx="3" ry="3" width={width/1.5} height="10" />


    <rect x={width-40} y="150" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="140" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="175" rx="3" ry="3" width={width/1.5} height="10" />


    <rect x={width-40} y="150" rx="3" ry="3" width="20" height="20" />
    <rect x="15" y="140" rx="3" ry="3" width={width/3} height="30" />
    <rect x="15" y="175" rx="3" ry="3" width={width/1.5} height="10" />
    
    </ContentLoader>
    </>
    
  )
}

AccountLoader.metadata = {
  name: 'Shakti Saurav',
  github: '7IG3R',
  description: 'Loading account options.',
  filename: 'AccountLoader',
}

export default AccountLoader
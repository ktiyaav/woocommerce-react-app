import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '../../../utils/windowSize'
const OrdersLoader = props => {
  const { height, width } = useWindowDimensions();
  const viewBox = '0 0 '+width+' 130';
  return (
    <>
    <ContentLoader
      speed={2}
      width={width - 20}
      height={130}
      viewBox={viewBox}
      {...props}
    >
    <rect x={width - 65} y="20" rx="0" ry="0" width="20" height="20" />
    <rect x="0" y="20" rx="4" ry="4" width="160" height="13" />
    <rect x="0" y="38" rx="3" ry="3" width="80" height="8" />
    <rect x="0" y="50" rx="3" ry="3" width="80" height="8" />
    <rect x="0" y="70" rx="3" ry="3" width="80" height="35" />
    <rect x="90" y="70" rx="3" ry="3" width="80" height="35" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={width - 20}
      height={130}
      viewBox={viewBox}
      {...props}
    >
    <rect x={width - 65} y="20" rx="0" ry="0" width="20" height="20" />
    <rect x="0" y="20" rx="4" ry="4" width="160" height="13" />
    <rect x="0" y="38" rx="3" ry="3" width="80" height="8" />
    <rect x="0" y="50" rx="3" ry="3" width="80" height="8" />
    <rect x="0" y="70" rx="3" ry="3" width="80" height="35" />
    <rect x="90" y="70" rx="3" ry="3" width="80" height="35" />
    </ContentLoader>
    </>
    
  )
}

OrdersLoader.metadata = {
  name: 'Shakti Saurav',
  github: '7IG3R',
  description: 'Loading a list of orders.',
  filename: 'OrdersLoader',
}

export default OrdersLoader
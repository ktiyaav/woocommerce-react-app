import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '../../../utils/windowSize'

export const CategoryLoader = props => {

  const { height, width } = useWindowDimensions();
  let i = 60
  let list = []
  while (i<width) {
    list.push(<circle cx={i} cy="60" r="50" key={i}/>)
    i += 120
  }
  return (
    <ContentLoader
      height={120}
      width={960}
      speed={1}
      column={5}
      {...props}
    >
      {list}
    </ContentLoader>
  )
}
CategoryLoader.metadata = {
  name: 'Shakti Saurav', 
  github: '7IG3R', 
  description: 'CategoryLoader', 
  filename: 'CategoryLoader', 
}




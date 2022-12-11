import React from 'react'
import ContentLoader from 'react-content-loader'
import { ArrowDownCircle } from 'react-feather'

const ProductLoader = ({
  width = 800,
  heading = { width: 70, height: 0 },
  row = 1,
  column = 5,
  padding = 10,
  borderRadius = 4,
  ...props
}) => {
  const list = []

  let height

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column)) / column

      const x = padding + j * (itemWidth + padding)

      const height1 = itemWidth

      const height2 = 20

      const height3 = 20

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4

      const y1 = padding + heading.height + padding * 2 + space * (i - 1)

      const y2 = padding + height1

      const y3 = y2 + padding / 2 + height2

      list.push(
        <>
          <rect key={i + '1'}
            x={x}
            y={0}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect key={i + '2'} x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect key={i + '3'}
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </>
      )

      if (i === row) {
        height = y3 + height3
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      speed={1}
      {...props}
    >
      {list}
    </ContentLoader>
  )
}

ProductLoader.metadata = {
  name: 'I am Doong - I come from Việt Nam',
  github: 'toiladoong',
  description: 'ProductLoader',
  filename: 'ProductLoader',
}

export default ProductLoader

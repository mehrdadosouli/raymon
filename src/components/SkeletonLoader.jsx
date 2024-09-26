import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoader = props => (
  <ContentLoader
    width={450}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#8F8F8F"
    foregroundColor="#dedede"
  >
    <rect x={props.x} y={props.y} rx={props.rx} ry={props.ry} width={props.w} height={props.h} />
  </ContentLoader>
)


export default SkeletonLoader
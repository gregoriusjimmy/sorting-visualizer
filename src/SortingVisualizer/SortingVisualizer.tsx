import React, { useEffect, useReducer, useState } from 'react'

import './SortingVisualizer.scss'

type Props = {
  array: number[]
}

const SortingVisualizer: React.FC<Props> = ({ array }) => {
  return (
    <div className='array-container'>
      {array.map((value, idx) => (
        <div
          className='array-bar'
          key={idx}
          style={{
            backgroundColor: 'turquoise',
            height: `${value}px`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default SortingVisualizer

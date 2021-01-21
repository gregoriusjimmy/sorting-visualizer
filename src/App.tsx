import React, { useEffect, useState } from 'react'

import './App.scss'
import { getBubbleSortAnimations } from './sortingAlgorithms/bubbleSort'
import { getInsertionSortAnimations } from './sortingAlgorithms/insertionSort'
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'
const ANIMATION_SPEED_MS = 1
const COMPARING_COLOR = 'green'
const SWAPPING_COLOR = 'red'
const PRIMARY_COLOR = 'turquoise'
function App() {
  const [array, setArray] = useState<number[]>([])

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const resetArray = () => {
    const array: number[] = []
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 730))
    }

    setArray(array)
    console.log(array)
  }
  useEffect(() => {
    resetArray()
    // eslint-disable-next-line
  }, [])
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  const bubbleSort = async () => {
    const animations = getBubbleSortAnimations(array)
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>
      const isSwapping = animations[i][2] === 'swap'
      const [barOneIdx, barTwoIdx] = animations[i]
      let barOneStyle = arrayBars[barOneIdx].style
      let barTwoStyle = arrayBars[barTwoIdx].style
      barOneStyle.backgroundColor = COMPARING_COLOR
      barTwoStyle.backgroundColor = COMPARING_COLOR
      await sleep(ANIMATION_SPEED_MS)
      if (isSwapping) {
        barOneStyle.backgroundColor = SWAPPING_COLOR
        barTwoStyle.backgroundColor = SWAPPING_COLOR
        await sleep(ANIMATION_SPEED_MS)
        ;[barOneStyle.height, barTwoStyle.height] = [barTwoStyle.height, barOneStyle.height]
        await sleep(ANIMATION_SPEED_MS)
      }
      barOneStyle.backgroundColor = PRIMARY_COLOR
      barTwoStyle.backgroundColor = PRIMARY_COLOR
    }
  }
  const insertionSort = async () => {
    const animations = getInsertionSortAnimations(array)
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>
      const isNext = animations[i][2] === 'next'
      const [barOneIdx, barTwoIdx] = animations[i]
      let barOneStyle = arrayBars[barOneIdx].style

      if (isNext) {
        barOneStyle.height = `${barTwoIdx}px`
        await sleep(ANIMATION_SPEED_MS)
        barOneStyle.backgroundColor = 'purple'
      } else {
        let barTwoStyle = arrayBars[barTwoIdx].style
        barOneStyle.backgroundColor = COMPARING_COLOR
        barTwoStyle.backgroundColor = COMPARING_COLOR
        await sleep(ANIMATION_SPEED_MS)
        barOneStyle.backgroundColor = SWAPPING_COLOR
        barTwoStyle.backgroundColor = SWAPPING_COLOR
        await sleep(ANIMATION_SPEED_MS)
        ;[barOneStyle.height, barTwoStyle.height] = [barTwoStyle.height, barOneStyle.height]
        await sleep(ANIMATION_SPEED_MS)
        barOneStyle.backgroundColor = 'purple'
        barTwoStyle.backgroundColor = 'purple'
      }
    }
  }
  return (
    <div>
      <div className='appbar'>
        <div className=''></div>
      </div>
      <div className='sorting-visualizer'>
        <SortingVisualizer array={array} />
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={bubbleSort}>bubbleSort</button>
      <button onClick={insertionSort}>insertionSort</button>
    </div>
  )
}

export default App

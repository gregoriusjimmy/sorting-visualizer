type Animations = Array<[number, number, 'next'?]>

export const getInsertionSortAnimations = (array: number[]): Animations => {
  let animations: Animations = []
  let arr = array.slice()

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j = i - 1
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      animations.push([j + 1, j])
      arr[j + 1] = arr[j]
    }
    // here j + 1 because j-- in previous loop
    arr[j + 1] = currentVal
    animations.push([j + 1, currentVal, 'next'])
  }

  return animations
}

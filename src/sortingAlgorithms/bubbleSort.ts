type Animations = Array<[number, number, 'swap'?]>

export const getBubbleSortAnimations = (array: number[]): Animations => {
  let animations: Animations = []
  let arr = array.slice()
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      animations.push([j, j + 1])
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1, 'swap'])
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      animations.push([j, j + 1])
    }
  }
  return animations
}

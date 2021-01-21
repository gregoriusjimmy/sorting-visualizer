// export const mergeSort = (arr: number[]): number[] => {
//   const animations = []
//   const merge = (arr1: number[], arr2: number[]) => {
//     let i = 0
//     let j = 0
//     let result: number[] = []
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i])
//         animations.push([])
//         i++
//       } else {
//         result.push(arr2[j])
//         j++
//       }
//     }
//     // push all remaining values if has any
//     while (i < arr1.length) {
//       result.push(arr1[i])
//       i++
//     }
//     while (j < arr2.length) {
//       result.push(arr2[j])
//       j++
//     }
//     return result
//   }

//   if (arr.length <= 1) return arr // base case
//   const midpoint = Math.floor(arr.length / 2)
//   const left = mergeSort(arr.slice(0, midpoint))
//   const right = mergeSort(arr.slice(midpoint))
//   return merge(left, right)
// }
export {}

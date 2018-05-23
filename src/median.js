import average from './average'

/**
 * Finds the center number
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {array} - Array of most occured numbers
 *
 * @example
 * median([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function median (numbers = []) {
  numbers.sort()

  const middleIndex = Math.round(numbers.length / 2) - 1
  const middleIndexRem = numbers.length % 2 === 0 ? 1 : 0
  const nums = numbers.slice(middleIndex, middleIndex + 1 + middleIndexRem)

  return average(nums)
}

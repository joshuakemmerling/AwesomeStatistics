import average from './average'

/**
 * Finds the center number of a sorted array. If
 * there are 2 numbers in the center it returns
 * the average.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {array} - Center number
 *
 * @example
 * median([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function median (numbers = []) {
  const index = (numbers.length - 1) / 2

  return average(numbers.sort().slice(Math.floor(index), Math.ceil(index) + 1))
}

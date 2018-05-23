/**
 * Calculates the average from the set of numbers.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Average value
 *
 * @example
 * average([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function average (numbers = []) {
  return numbers.reduce((a, v) => a + v, 0) / numbers.length
}

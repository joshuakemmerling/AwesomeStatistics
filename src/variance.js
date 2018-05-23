import average from './average'

/**
 * Calculates the variance from the set of numbers.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Variance
 *
 * @example
 * variance([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function variance (numbers = []) {
  const avg = average(numbers)

  return average(numbers.map(number => Math.pow(number - avg, 2)))
}

import variance from './variance'

/**
 * Calculates the standard deviation from the set of numbers.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Standard deviation
 *
 * @example
 * standardDeviation([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function standardDeviation (numbers = []) {
  return Math.sqrt(variance(numbers))
}

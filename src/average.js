import sum from './sum'

/**
 * Calculates the average from the set of numbers.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Calculated average
 *
 * @example
 * average([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function average (numbers = []) {
  return sum(numbers) / numbers.length
}

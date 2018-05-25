/**
 * Finds the difference between the smallest and
 * largest numbers in the data set.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Calculated range
 *
 * @example
 * range([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function range (numbers = []) {
  return numbers.length === 0 ? 0 : Math.max(...numbers) - Math.min(...numbers)
}

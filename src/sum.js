/**
 * Adds all numbers together.
 *
 * @param {array} numbers = [] - Numbers to be added
 * @returns {number} - Sum
 *
 * @example
 * sum([ 1, 2, 3 ])
 */
export default function sum (numbers = [], iteratee = v => v, initialValue = 0) {
  return numbers.reduce((a, v, i, arr) => a + iteratee(v, i, arr), initialValue)
}

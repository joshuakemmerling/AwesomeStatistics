/**
 * Finds the range from a data set
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Difference between the high and low values
 *
 * @example
 * range([ 1, 5, 6, 3, 7, 8, 9 ])
 */
function range (numbers = []) {
  if (numbers.length === 0) {
    return 0
  }

  return Math.max(...numbers) - Math.min(...numbers)
}

module.exports = range

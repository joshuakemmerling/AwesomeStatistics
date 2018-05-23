const variance = require('./variance')

/**
 * Calculates the standard deviation from the set of numbers.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {number} - Variance
 *
 * @example
 * standardDeviation([ 1, 5, 6, 3, 7, 8, 9 ])
 */
function standardDeviation (numbers = []) {
  return Math.sqrt(variance(numbers))
}

module.exports = standardDeviation

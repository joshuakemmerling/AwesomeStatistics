/**
 * Finds the number(s) that occur the most
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {array} - Array of most occured numbers
 *
 * @example
 * mode([ 1, 5, 6, 3, 7, 8, 9 ])
 */
function mode (numbers = []) {
  const groups = numbers.filter((v, i, a) => a.indexOf(v) === i).map(v => numbers.filter(n => v === n))
  const max = Math.max(...groups.map(v => v.length))

  return groups.filter(v => v.length === max).map(v => v[0])
}

module.exports = mode

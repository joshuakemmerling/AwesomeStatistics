/**
 * Finds the value(s) that occurs most frequently
 * in a given set of data.
 *
 * @param {array} numbers = [] - Numbers to calculate
 * @returns {array} - Most occured numbers
 *
 * @example
 * mode([ 1, 5, 6, 3, 7, 8, 9 ])
 */
export default function mode (numbers = []) {
  const groups = numbers.filter((v, i, a) => a.indexOf(v) === i).map(v => numbers.filter(n => v === n))
  const max = Math.max(...groups.map(v => v.length))

  return groups.filter(v => v.length === max).map(v => v[0])
}

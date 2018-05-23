/**
 * Calculates the correlation of the provided points.
 *
 * @param {array} points = [] - X, Y values
 * @returns {number} - Correlation of the data points
 *
 * @example
 * correlation([ [ 2, 3 ], [ 4, 3 ], [ 5, 9 ], [ 2, 9 ], [ 4, 7 ], [ 5, 5 ] ])
 */
export default function correlation (points = []) {
  const sumX = points.reduce((a, [ x, y ]) => a + x, 0)
  const sumY = points.reduce((a, [ x, y ]) => a + y, 0)
  const sumXy = points.reduce((a, [ x, y ]) => a + x * y, 0)
  const sumXx = points.reduce((a, [ x, y ]) => a + x * x, 0)
  const sumYy = points.reduce((a, [ x, y ]) => a + y * y, 0)

  const step1 = (points.length * sumXy) - (sumX * sumY)
  const step2 = (points.length * sumXx) - (sumX * sumX)
  const step3 = (points.length * sumYy) - (sumY * sumY)
  const step4 = Math.sqrt(step2 * step3)
  const answer = step1 / step4

  return answer
}

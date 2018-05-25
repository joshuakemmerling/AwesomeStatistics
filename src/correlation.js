import average from './average'
import sum from './sum'

/**
 * Calculates the correlation of the provided points.
 *
 * @param {array} points = [] - X, Y values
 * @returns {number} - Calculated correlation
 *
 * @example
 * correlation([ [ 2, 3 ], [ 4, 3 ], [ 5, 9 ], [ 2, 9 ], [ 4, 7 ], [ 5, 5 ] ])
 */
export default function correlation (points = []) {
  const xAvg = average(points.map(([ x ]) => x))
  const yAvg = average(points.map(([ _, y ]) => y))
  const newPoints = points.map(([ x, y ]) => ([ x - xAvg, y - yAvg ]))
  const sumXy = sum(newPoints, ([ x, y ]) => x * y)
  const sumXx = sum(newPoints, ([ x ]) => x * x)
  const sumYy = sum(newPoints, ([ _, y ]) => y * y)

  return sumXy / Math.sqrt(sumXx * sumYy)
}

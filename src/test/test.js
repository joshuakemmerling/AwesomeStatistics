const average = require('../lib/average');
const correlation = require('../lib/correlation');
const median = require('../lib/median');
const mode = require('../lib/mode');
const range = require('../lib/range');
const standardDeviation = require('../lib/standard-deviation');
const variance = require('../lib/variance');

describe('Average', () => {
  it('should average', () => {
    expect(average()).toEqual(NaN)
  })

  it('should average []', () => {
    expect(average([])).toEqual(NaN)
  })

  it('should average [ 2, 2, 2, 2, 2 ]', () => {
    expect(average([ 2, 2, 2, 2 ])).toEqual(2)
  })
})

describe('Correlation', () => {
  it('should correlate', () => {
    expect(correlation()).toEqual(NaN)
  })

  it('should correlate []', () => {
    expect(correlation([])).toEqual(NaN)
  })

  it('should correlate [ [ 2, 5 ], [ 1, 7 ], [ 4, 4 ], [ 3, 9 ], [ 7, 3 ], [ 8, 6 ] ]', () => {
    expect(correlation([ [ 2, 5 ], [ 1, 7 ], [ 4, 4 ], [ 3, 9 ], [ 7, 3 ], [ 8, 6 ] ])).toEqual(-0.42079601073285117)
  })
})

describe('Median', () => {
  it('should find middle', () => {
    expect(median()).toEqual(NaN)
  })

  it('should find middle of []', () => {
    expect(median([])).toEqual(NaN)
  })

  it('should find middle of [ 2, 5, 6, 7, 8 ]', () => {
    expect(median([ 2, 5, 6, 7, 8 ])).toEqual(6)
  })

  it('should find middle of [ 2, 5, 6, 7, 8, 9 ]', () => {
    expect(median([ 2, 5, 6, 7, 8, 9 ])).toEqual(6.5)
  })
})

describe('Mode', () => {
  it('should find most occurrences', () => {
    expect(mode()).toEqual([])
  })

  it('should find most occurrences of []', () => {
    expect(mode([])).toEqual([])
  })

  it('should find most occurrences of [ 1, 1, 1, 4, 6, 7, 9 ]', () => {
    expect(mode([ 1, 1, 1, 4, 6, 7, 9 ])).toEqual([ 1 ])
  })

  it('should find most occurrences of [ 1, 7, 1, 1, 4, 6, 7, 9, 7 ]', () => {
    expect(mode([ 1, 7, 1, 1, 4, 6, 7, 9, 7 ])).toEqual([ 1, 7 ])
  })
})

describe('Range', () => {
  it('should calculate range', () => {
    expect(range()).toEqual(0)
  })

  it('should calculate range of []', () => {
    expect(range([])).toEqual(0)
  })

  it('should calculate range of [ 23, 43, 123, 54, 34 ]', () => {
    expect(range([ 23, 43, 123, 54, 34 ])).toEqual(100)
  })
})

describe('Standard Deviation', () => {
  it('should calculate standard deviation', () => {
    expect(standardDeviation()).toEqual(NaN)
  })

  it('should calculate standard deviation of []', () => {
    expect(standardDeviation([])).toEqual(NaN)
  })

  it('should calculate standard deviation of [ 2, 6, 5, 4, 9, 8, 9 ]', () => {
    expect(standardDeviation([ 2, 6, 5, 4, 9, 8, 9 ])).toEqual(2.4743582965269675)
  })
})

describe('Variance', () => {
  it('should calculate variance', () => {
    expect(variance()).toEqual(NaN)
  })

  it('should calculate variance of []', () => {
    expect(variance([])).toEqual(NaN)
  })

  it('should calculate variance of [ 5, 1, 2, 1, 6, 4, 9, 8, 7 ]', () => {
    expect(variance([ 5, 1, 2, 1, 6, 4, 9, 8, 7 ])).toEqual(7.950617283950619)
  })
})

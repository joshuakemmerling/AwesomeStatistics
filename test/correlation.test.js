import correlation from '../src/correlation'

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

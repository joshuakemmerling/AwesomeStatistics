import standardDeviation from '../src/standard-deviation'

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

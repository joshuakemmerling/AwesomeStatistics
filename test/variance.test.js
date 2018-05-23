import variance from '../src/variance'

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

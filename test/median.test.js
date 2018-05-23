import median from '../src/median'

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

import average from '../src/average'

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

import range from '../src/range'

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

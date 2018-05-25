import sum from '../src/sum'

describe('Sum', () => {
  it('should sum', () => {
    expect(sum()).toEqual(0)
  })

  it('should sum []', () => {
    expect(sum([])).toEqual(0)
  })

  it('should sum [ 1, 2, 3 ]', () => {
    expect(sum([ 1, 2, 3 ])).toEqual(6)
  })

  it('should sum [ 1, 2, 3 ], v => v * v', () => {
    expect(sum([ 1, 2, 3 ], v => v * v)).toEqual(14)
  })

  it('should sum [ 1, 2, 3 ], v => v * v, 10', () => {
    expect(sum([ 1, 2, 3 ], v => v * v, 10)).toEqual(24)
  })
})

import mode from '../src/mode'

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

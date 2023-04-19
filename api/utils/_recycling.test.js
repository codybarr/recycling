import recycling from './_recycling'

describe('recycling', () => {
  it('should return false when recycling is NOT this week', () => {
    const actual = recycling({
      knownRecyclingDate: '2023-02-17',
      dateToCheck: '2023-02-21',
    })

    expect(actual).toEqual(false)
  })

  it('should return true when recycling IS this week', () => {
    const actual = recycling({
      knownRecyclingDate: '2023-02-17',
      dateToCheck: '2023-03-01',
    })

    expect(actual).toEqual(true)
  })

  it('should throw when dates are invalid', () => {
    expect(() =>
      recycling({
        knownRecyclingDate: 'bargle',
      })
    ).toThrow()
  })
})

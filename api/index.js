import isRecyclingWeek from './utils/_recycling'

export default async (req, res) => {
  const { knownRecyclingDate } = req.query
  try {
    const recyclingWeek = isRecyclingWeek({
      knownRecyclingDate,
    })
    return res.json({
      message: recyclingWeek
        ? 'Recyclables are this week'
        : 'Recyclables are NEXT week',
    })
  } catch {
    return res.status(400).json({
      error:
        'knownRecyclingDate must be provided as a query param and be a valid date (eg. 2023-01-23)',
    })
  }
}

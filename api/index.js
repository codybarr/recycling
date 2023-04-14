import { differenceInWeeks, isValid } from 'date-fns'

export default async (req, res) => {
  if (!isValid(new Date(req.query.knownRecyclingDate)))
    return res.status(400).json({
      error:
        'knownRecyclingDate must be provided as a query param and be a valid date (eg. 2023-01-23)',
    })

  const TODAY = new Date()
  const KNOWN_DELIVERY_DATE = new Date(req.query.knownRecyclingDate)
  const DISTANCE = differenceInWeeks(TODAY, KNOWN_DELIVERY_DATE)

  const message =
    DISTANCE % 2 === 0
      ? 'Recyclables are this week'
      : 'Recyclables are NEXT week'

  return res.json({ message })
}

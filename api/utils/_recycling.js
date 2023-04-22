import { differenceInWeeks, isValid } from 'date-fns'

const isRecyclingWeek = ({ knownRecyclingDate, dateToCheck = new Date() }) => {
  const KNOWN_RECYCLING_DATE = new Date(knownRecyclingDate)
  const DAY_TO_CHECK = new Date(dateToCheck)

  if (!isValid(DAY_TO_CHECK) || !isValid(KNOWN_RECYCLING_DATE))
    throw new Error('knownRecyclingDate and dateToCheck must be valid dates')

  const DISTANCE = differenceInWeeks(DAY_TO_CHECK, KNOWN_RECYCLING_DATE)
  return DISTANCE % 2 === 0 ? true : false
}

export default isRecyclingWeek

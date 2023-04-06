import { createGlobalState } from 'react-hooks-global-state'
import moment from 'moment'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createModal: 'scale-0',
  connectedAccount: '',
  contract: null,
  proposals: [
    {
      id: '02',
      title: 'rfgsdg',
      proposer: 'fgxdfg',
      duration: 1382000000,
      paid: 0,
      upvotes: 213,
      downvotes: 32
    },
    {
      id: '03',
      title: 'rfgsdg',
      proposer: 'mktrtwe',
      duration: 1681000000,
      paid: 1,
      upvotes: 12,
      downvotes: 328
    },
    {
      id: '05',
      title: 'rfgsdg',
      proposer: 'eerwe vbfd',
      duration: 1891000000,
      paid: 1,
      upvotes: 2323,
      downvotes: 32
    }
  ],
  isStakeholder: true,
  balance: 120,
  mybalance: 2,
})

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars)
    var end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const daysRemaining = (days) => {
  const todaysdate = moment()
  days = Number((days + '000').slice(0))
  days = moment(days).format('YYYY-MM-DD')
  days = moment(days)
  days = days.diff(todaysdate, 'days')
  return days == 1 ? '1 day' : days + ' days'
}

export {
  truncate,
  setGlobalState,
  useGlobalState,
  getGlobalState,
  daysRemaining,
}

const toUSDate = (date) => {
  const arrDate = date.split('/')
  return `${arrDate[1]}-${arrDate[0]}-${arrDate[2]}`
}

const toTheRestOfWorldDate = (date) => {
  const arrDate = date.split('-')
  return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`
}

const stringToDate = (date) => {
  return new Date(date)
}

export { toUSDate, stringToDate, toTheRestOfWorldDate }

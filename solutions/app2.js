const HU = {
  date: (date) => new Intl.DateTimeFormat('hu-HU').format(date),
  curreny: (sum) => new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF'
  }).format(sum),
  list: (arr) => arr.slice(0, -1).join(', ') + ' és ' + arr[arr.length - 1]
}




export default HU

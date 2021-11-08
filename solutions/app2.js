const HU = {
  date: (date) => new Intl.DateTimeFormat('hu-HU').format(date),
  curreny: (sum) => new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF'
  }).format(sum),
  list: (arr) => arr.map((item,i)=> i === arr.length-1 ? ` és ${item}` : `, ${item}`)
  .join('').slice(2)
}




export default HU

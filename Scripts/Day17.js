// Task 1. Today's date in a specific format
let today = new Date()
const day = today.getDay()
const daylist = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
console.log('Ma ' + daylist[day] + ' van.')
let hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()
const period = (hour >= 12) ? 'Délután' : 'Délelőtt'
if (hour > 12) {
  hour = hour - 12
}
console.log(period, hour + ' óra ' + minute + ' perc ' + second + ' másodperc ')

// Task 2. Print the current page
const printCurrentpage = () => window.print()
document.getElementById('print').addEventListener('click', printCurrentpage)

// Task 3. Date in multiple formats
var dd = today.getDate()
var mm = today.getMonth() + 1
var yyyy = today.getFullYear()
if (dd < 10) {
  dd = '0' + dd
}

if (mm < 10) {
  mm = '0' + mm
}

today = mm + '-' + dd + '-' + yyyy
console.log(today)
today = mm + '/' + dd + '/' + yyyy
console.log(today)
today = dd + '-' + mm + '-' + yyyy
console.log(today)
today = dd + '/' + mm + '/' + yyyy
console.log(today)

// Task 4. Find the area of a triangle where lengths of the three of its sides are 5, 6, 7 - using heron's format
const sideA = 5
const sideB = 6
const sideC = 7
const halfPerimeter = (sideA + sideB + sideC) / 2
const area = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC))
console.log('The area of the triangle is: ' + area + ' unit')

// Task 5. Rotate string Ezt nem igazán értem mit miért csinál, utána kell olvasni majd Csosza segít ha nem megy.
function rotateText (target) {
  const element = document.getElementById(target) //mozgatandó szöveg helye
  const textNode = element.childNodes[0] // ???
  let text = textNode.data //????

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1) //ezt nem értem mit csinál
    textNode.data = text
  }, 100) // infinite function but why??
}

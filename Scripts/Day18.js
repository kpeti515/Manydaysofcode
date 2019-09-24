// Task 6.: Write a JavaScript program 
// to determine whether a given year is
// a leap year in the Gregorian calendar
console.log('Task6:')
let leapyear = function (year) {
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) 
}
console.log(leapyear(2020), leapyear(1700), leapyear(1800), leapyear(1999), leapyear(1600))

// Task 7.: Find 1st January be a Monday between a range of years
console.log('Task 7:')
for (let year = 1990; year < 2050; year++) {
	let mondays = new Date(year,0,1)
	if (mondays.getDay() === 1)	{
		console.log('In ' + year + ' the first day is Monday')
	}
}

// Task 8.: Display a message when a number is between a range
 
setTimeout (function () {
	console.log('Task8:')
	const randomNum1 = Math.ceil(Math.random()*10)
	let userNum = Number(prompt('Guess a number between 1 and 10'))
	while (userNum % 1 !==0 || userNum > 10 || userNum < 0) {
		userNum = Number(prompt('Number must be between 1 and 10 and must be integer!'))
	}
	randomNum1 === userNum ? console.log('You guessed well, the number was ' + randomNum1) : console.log('You missed it, the number was: ' + randomNum1) 
	},3000)

// Task 9.: Write a JavaScript program to calculate days left until next Christmas.
console.log('Task9:')
const today = new Date()
const Christmas = new Date(today.getFullYear(), 11, 24)
const daysLeft = Math.ceil((Christmas-today)/24/60/60/1000)
// const hoursLeft = Math.floor((Christmas-today)/24/60/60/1000 % (daysLeft-1) * 24)
console.log (daysLeft + 'days left until christmas')

// Task 10.: Write a JavaScript program to get the website URL (loading page)
console.log('Task 10:')
console.log(document.URL)

// Task 11.: Get the extension of a filename
console.log('Task 11:')
filename1 = 'node.js'
filename2 = 'asd.mdf'
console.log(filename1.split('.').pop() + ' ' + filename2.split('.').pop())

/* Task 12.: Write a JavaScript program to get the difference between a given number
and 13, if the number is greater than 13 return double the absolute difference.*/
console.log('Task12')
const randomNum2 = Math.ceil(Math.random()*100)
console.log('random generated number: ' +randomNum2)
randomNum2 > 13 ? console.log('Double of the absolute difference from 13 -> ' + Math.abs(randomNum2-13)*2) : console.log('Absolute difference from 13 -> ' + Math.abs(randomNum2-13))

/* Task 13.:Check two given numbers and return 
true if one of the number is 50 or if their sum is 50*/
console.log('Task 13:')
firstNum = randomNum2
secondNum = Math.ceil(Math.random()*100)
let fiftycheck = function (firstNum, secondNum) {
	return (firstNum === 50 || secondNum ===50 || (firstNum+secondNum ===50))
}
console.log(firstNum, secondNum, fiftycheck())

//Task 14.:Create a new string adding "Py" in front of a given string
console.log('Task 14:')
let string = ''
const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//alternative method Math.random().toString(32).substring(2) -only lowercase in this situation....
const characterSetlenght = characterSet.length
for (let i = 0; i < 5; i++) {
	string +=  characterSet.charAt(Math.floor(Math.random()*characterSetlenght))
}
console.log(string)
if (string.substring(0, 2) !== "Py") {
	string = "Py"+string
}
console.log(string)

/*Task 15.:Create a new string from a given string 
changing the position of first and last characters*/
console.log('Task 15:')
let change = function () {
	const middleString = string.substring(1,string.length-1)
	return (string.charAt(string.length-1) + middleString + string.charAt(0))
}
console.log(change())
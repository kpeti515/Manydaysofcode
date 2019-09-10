const tasks = []

function resetTasks () {
  tasks.forEach(clearTimeout)
}

function cleanWindow () {
  document.getElementById('fizzresult').innerText = ''
}

function calculation (a, b) {
  cleanWindow()
  for (let i = 1; i <= 101; i++) {
    const timeout = i * 50
    let message = ''
    if (i === 101) {
      message = 'Calculation finished'
    } else if (i % a === 0 && i % b === 0) {
      message = "Result at '" + i + "' FIZZBUZZ" + '\n' + '\n'
    } else if (i % a === 0) {
      message = "Result at '" + i + "' FIZZ" + '\n' + '\n'
    } else if (i % b === 0) {
      message = "Result at '" + i + "' BUZZ" + '\n' + '\n'
    }
    sendMessage(message, timeout)
  }
}

function sendMessage (message, timeout = 0) {
  const task = setTimeout(() => {
    msg(message)
  }, timeout)
  tasks.push(task)
}

function msg (message) {
  const msg = document.getElementById('fizzresult')
  msg.innerText += message
}

function fizzbuzz (a = 0, b = 0) {
  resetTasks()
  cleanWindow()

  a = typeof a === 'number' ? a : Number(a)
  b = typeof b === 'number' ? b : Number(b)

  if (a % 1 !== 0 || b % 1 !== 0) {
    msg('Use only Integers!')
  } else if (a === 0 || b === 0) {
    msg('Can not use ZERO as divider, please use an integer except zero')
  } else if (Math.abs(a) > 100 && Math.abs(b) > 100) {
    msg('Please use numbers between -100 and 100, otherwise there will be no result....')
  } else {
    msg('Working on it')

    setTimeout(() => { calculation(a, b) }, 1500)
  }
}

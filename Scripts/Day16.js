let message = document.getElementById("fizzresult")

function fizzbuzz(a = 0, b = 0) {
    a = typeof a === 'number' ? a : Number(a)
    b = typeof b === 'number' ? b : Number(b)

    if (a == 0 || b == 0) {
        message.innerText = "Can not use ZERO as divider, please use an integer except zero"
    }
    else if (a > 100 && b > 100) {
        message.innerText = "Please use numbers between -100 and 100, otherwise there will be no result...."
    }
    else {
        message.innerHTML = "Working on it..."
        setTimeout(calculating, 2000)
        function calculating() {
            message.innerHTML = ""
            for (var i = 1; i <= 100; i++) {
                if (i % a == 0 && i % b == 0) {
                    message.innerText += "Result at '" + i + "' FIZZBUZZ" + "\n" + "\n"
                }
                else if (i % a == 0) {
                    message.innerText += "Result at '" + i + "' FIZZ" + "\n" + "\n"
                }
                else if (i % b == 0) {
                    message.innerText += "Result at '" + i + "' BUZZ" + "\n" + "\n"
                } 
            } 
        }
    }
}


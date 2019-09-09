function msg(message) {
    const msg = document.getElementById("fizzresult")
    msg.innerText += message
}

function fizzbuzz(a = 0, b = 0) {
    clearTimeout()
    a = typeof a === 'number' ? a : Number(a)
    b = typeof b === 'number' ? b : Number(b)

   // document.getElementById("fizzresult").innerText = message

    if (a == 0 || b == 0) {
        msg("Can not use ZERO as divider, please use an integer except zero")
    }
    else if (a > 100 && b > 100) {
        msg("Please use numbers between -100 and 100, otherwise there will be no result....")
    }
    else {
        document.getElementById("fizzresult").innerText ="Working on it..."
        //setTimeout(calculating, 1000)
        calculating()
        function calculating() {
            document.getElementById("fizzresult").innerText = ""
            for (let i = 1; i <= 100; i++) {
                function timedelay(data) {
                    setTimeout(()=> {msg(data)}, i*50)
                }
                if (i % a == 0 && i % b == 0) {
                    //setTimeout(()=>{ msg("Result at '" + i + "' FIZZBUZZ" + "\n" + "\n")}, i*10)
                    timedelay("Result at '" + i + "' FIZZBUZZ" + "\n" + "\n")
                    }
                
                else if (i % a == 0) {
                    timedelay("Result at '" + i + "' FIZZ" + "\n" + "\n")
                }
                else if (i % b == 0) {
                    timedelay("Result at '" + i + "' BUZZ" + "\n" + "\n")
                } 
            } 
        }
    }
}
function functionName( s ){
	alert('Hello ' + s + '!');
};

function hide (){
   if (document.getElementById('hide').style.visibility == 'hidden'){
    document.getElementById('hide').style.visibility='visible';  
   }
   else {
    document.getElementById('hide').style.visibility='hidden'; 
   }
};

const add = (a = 0, b = 0) => {
    // ✅ always cast to Number bc. html element.value if any then it'll be string or null
    a = typeof a === 'number' ? a : Number(a) // short-if - ezzel pont tisztában voltam 👍, ha a tpye-ja number ok, ha nem  akkor a legyen number a
    b = typeof b === 'number' ? b : Number(b)
    const sum = a + b
    document.getElementById("operator").innerHTML = "+"
    document.getElementById("opname").innerHTML = "addition"
    return document.getElementById("result").value = sum
}

function sub (a,b) {
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("opname").innerHTML = "substraction";
    return document.getElementById("result").value = Number(a) - Number(b);
};

function multi (a,b) {
    document.getElementById("operator").innerHTML = "*";
    document.getElementById("opname").innerHTML = "Multiplication";
    return document.getElementById("result").value = Number(a) * Number(b);
};

function div (a,b) {
    document.getElementById("operator").innerHTML = "/";
    document.getElementById("opname").innerHTML = "Division";
    return document.getElementById("result").value = Number(a) / Number(b);
};
function mod (a,b) {
    document.getElementById("operator").innerHTML = "%";
    document.getElementById("opname").innerHTML = "Modus operation";
    return document.getElementById("result").value = Number(a) % Number(b);
};
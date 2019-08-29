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

  //chosa91 method - ES2016 azt hiszem...
const add = (a = 0, b = 0) => {
    a = typeof a === 'number' ? a : Number(a) 
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
   // b == 0 ? document.getElementById("result").value = "Cannot divide with zero" : "else ág kerülne ide...de ami a lentebbi else ágban van azt nem tudom meghívni"
   if (b==0) {
    document.getElementById("result").value = "Cannot divide with zero"
   } 
   else {
     document.getElementById("operator").innerHTML = "/"
     document.getElementById("opname").innerHTML = "Division"
    return document.getElementById("result").value = Number(a) / Number(b);
   }
};
function mod (a,b) {
    if (b==0) {
        document.getElementById("result").value = "Number B is 0-> no meaning"
       } 
    else {
    document.getElementById("operator").innerHTML = "%";
    document.getElementById("opname").innerHTML = "Modus operation";
    return document.getElementById("result").value = Number(a) % Number(b);
    }
};
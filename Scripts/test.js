// Copy of Day16.js
// trollkodás + tanítás helye ...
/*
let tasks = []

function msg(message) {
   const msg = document.getElementById("fizzresult")
   msg.innerText += message
}

function resetTasks() {
   tasks.forEach(clearTimeout)// a foreach működését még nem vágom fejből, majd utánanézek.... 
   //de legalább látod hogy a változókat jobban kezelem, meg "picit" átláthatóbb mint legutóbb? xD
   // picit. ;) most hallom először a linter szót sztem xD
   // standardJS vs code-hoz tedd fel, fele annyi gondod leszsokan ESLint-re esküsznek, ez az ESLint felett pár extra szabállyal bír
   // de azt is látom hogy még mindig nem használsz lintert :D és ezáltal vannak érdekes behúzások, meg hogy lent a timedelay function-t 100x deklarálod
}

function sendAsyncMessage(message, timeout = 0) {
   const task = setTimeout(()=> {
      msg(message)
   }, timeout)
   tasks.push(task)
}

function convertToNumber(input) {
   return typeof input === 'number' ? input : Number(input)
}

function fizzbuzz(a = 0, b = 0) {
   // reset state
   resetTasks() // ← 👋
   document.getElementById("fizzresult").innerText = ""

   a = convertToNumber(a)
   b = convertToNumber(b)

   // Check for Integers
   if (a % 1 !== 0 || b % 1 !== 0) {//okay.... got it.... //most mennek kell.... thx mindent || csoki
      msg("Meh")
      return
   }

   if (a == 0 || b == 0) {
      msg("Can not use ZERO as divider, please use an integer except zero")
   } else if (a > 100 && b > 100) {
      msg("Please use numbers between -100 and 100, otherwise there will be no result....")
   } else {
      msg("Working...") //extra kérdés: bemenetnél van check hogy tuti szám.. .de egész szám kéne legyen, ne 0,9-cel akarjak 90-et maradék nélkül osztani
      // és mi legyen ha nem egész szám? kerekítsen vagy dobjon hibát?
    //hiba
      for (let i = 1; i <= 100; i++) {
         const timeout = i * 50
         let message = ""
         if (i % a == 0 && i % b == 0) {
            message = "Result at '" + i + "' FIZZBUZZ"
         } else if (i % a == 0) {
            message = "Result at '" + i + "' FIZZ"
         } else if (i % b == 0) {
            message = "Result at '" + i + "' BUZZ"
         }

         if (message.length > 0) { // if notEmpty
            message += "\n\n" // ezt miért?, jaaa, ha nagyobb mint 0 a lenght... ok... mert mind3 sorhoz hozzáfűzted
            // reduce duplications if possible //na igen, itt jön elő a szintkülönbség
            //btw már nagyjából értem miért nem alkalmznak full pályakezdőket IT cégek... 1 óra volt csak annak utánaolvasni hogy hogy oldjam meg a settimeoutot
         } //és durva hogy a te kódod még én is jobban olvasom mint a sajátomat... Van hova fejlődni :D //valahol van 1 hiba--still...
         // az most nincs, hogy working still progress nálam már ott lefagy hogy 'a' nincs def. => fixed most lefut, de a working ... hiányzik :D (mármint nekem)

         sendAsyncMessage(message, timeout)
      }
   }
}*/
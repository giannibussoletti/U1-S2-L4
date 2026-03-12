// FUNZIONI in JS!

// Con funzione in un linguaggio di programmazione, si intende un blocco di codice riutilizzabile
// Questo blocco di codice viene dotato di nome, e dopo la sua definizionepuò
// venire "invocato" per attivare al suo interno.

// in JS:
// 1)  prima si "definisce" la funzione con una dichiarazione
// 2) poi la si "invoca" (esegue, utilizza)

// La mia prima funzione in JS

//1)
// per aprire una funzione si crea una variabile con const e dopo = si dichiara function con () e {} subito dopo
const bark = function () {
  // questa sezione tra graffe si definisce "CORPO", body della funzione
  // in questo blocco si inseriscono  di JS che voglio "incapsulare"
  console.log("BAU")
}

// Il codice sopra è solo la dichiarazione  della funzione
// Ma non viene eseguita, perché la funzione non si autoesegue

// 2)
// una funzione si invoca usando il nome della variabile con le parentesi tonde alla fine
// del nome della variabile
bark()

// --- WARNING: non create le funzioni così!
// 2)
meow()
// questo è un modo "vecchio" per creare funzioni in JS che ha una particolarità
// 1)
function meow() {
  console.log("MAO")
}

// le funzioni definite senza variabili ma solamente con il costrutto "function" presentano
// un comportamento automatico: il cosidetto "HOISTING"
// HOISTING = porta la funzione in alto nel documento

// altro esempio

let contatore = 0 // Variabile con visibilità globale

const incrementaContatore = function () {
  contatore = contatore + 10
  let nascosta = "stefano"
}

// quanto vale contatore?
// contatore vale 0 //perché la funzione non è stata chiamata

incrementaContatore() // chiamo la funzione
// quindi adesso il contatore vale 10

// la variabile "nascosta" non esiste al di fuori della funzione.
// perché let e const creano variabili con visibilità di "blocco" (block-scoped variables)
// significa che una variabile è accessibile solamente nel blocco in cui è definita { }
// e nelle righe successive
// se create però una variabile nel foglio js al di fuori di if/else/for/function, questa
// avrà sempre visibilità "di blocco" però in questo caso il suo "blocco" è l'interno foglio JS.

// è una buona idea creare una funzione ogni volta che si presenta la necessità di isolare
// delle righe che lavorano "insieme", che servono insieme per raggiungere un risultato:

const sayHelloToStefano = function () {
  const name = "Stefano"
  const saluto = "Buongiorno"
  const messaggio = saluto + " " + name // 'Buongiorno Stefano'
  console.log(messaggio)
}

// un'altra idea per creare una funzione potrebbe essere quella di scrivere UNA VOLTA SOLA
// delle righe che si presentano in vari punti del codice

let globalCounter = 0

const checkGlobalCounter = function () {
  console.log("Valore di global counter: ")
}

globalCounter++
checkGlobalCounter

globalCounter += 10
checkGlobalCounter

globalCounter -= 5
checkGlobalCounter

// nell'esempio sopra invece ci richiedere 3 volte il console log per ogni cambio di
// globaCounter si è andata a creare una funzione per rendere il codice più funzionale e pulito.
// Se dovessi andare a modificare il comportamento delle stesse righe più volte sarebbe un problema
// la funzioni permette di cambiare il comportamento di quella riga una sola volta e rendere la modifica
// avviabile per tutto il documento immediatamente

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
// meow()
// // questo è un modo "vecchio" per creare funzioni in JS che ha una particolarità
// // 1)
// function meow() {
//   console.log("MAO")
// }

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
console.log("il contatore prima dell'invocazione: " + contatore)
incrementaContatore() // chiamo la funzione
console.log("il contatore dopo l'invocazione: " + contatore)
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

sayHelloToStefano()

// un'altra idea per creare una funzione potrebbe essere quella di scrivere UNA VOLTA SOLA
// delle righe che si presentano in vari punti del codice

let globalCounter = 0

const checkGlobalCounter = function () {
  console.log("Valore di global counter: " + globalCounter)
}

globalCounter++
checkGlobalCounter()

globalCounter += 10
checkGlobalCounter()

globalCounter -= 5
checkGlobalCounter()

// nell'esempio sopra invece ci richiedere 3 volte il console log per ogni cambio di
// globaCounter si è andata a creare una funzione per rendere il codice più funzionale e pulito.
// Se dovessi andare a modificare il comportamento delle stesse righe più volte sarebbe un problema
// la funzioni permette di cambiare il comportamento di quella riga una sola volta e rendere la modifica
// avviabile per tutto il documento immediatamente

// altro esempio
const sum = function () {
  const n1 = 5
  const n2 = 7
  const risultato = n1 + n2
  console.log(risultato)
}

sum()

// In questo esempio però il problema è cambiare i numeri della variabile
// che rimangono uguali sempre o anche nella funzione sayHelloToStefano che dirà
// sempre stessa frase

// per riciclare una funzione si usano i PARAMETRI, che si usano per generalizzare
// il comportamento di una funzione
// PARAMETRIZZARE una funzione la rendere più GENERICA, più RIUTILIZZABILE;
// una funzione per sommare due numeri NON HA I DUE VALORI inseriti al suo interno.
// i dati possono essere forniti quando la funzione viene INVOCATA.

// la parte 1, cioè la dichiarazione non saprà mai quali numeri sommare, utilizza dei "placeholders"
const sumTheAll = function (num1, num2) {
  // num1 e num2 sono PARAMETRI della funzione sumTheAll()
  const risultato = num1 + num2
  console.log(risultato)
}

// è nella parte 2, all'invocazione che i parametri vengono dichiarati
sumTheAll(8, 9)
// i parametri dichiarati nella parentesi corrispondo ai placeholders messi
// nella funzione. quindi andando a sostituire i numeri nell'invocazione
// il risultato cambierà
sumTheAll(10, 11)
sumTheAll(13, 400)

sumTheAll(10) // in questo caso num2 prendere il valore "d'ufficio" di undefined
sumTheAll(1, 4, 6) // il terzo ARGOMENTO viene ignorato
// perché non è dichiarato come PARAMETRO nella funzione

// NOMENCLATURA: -> num1 e num2 si definiscono PARAMETRI della funzione.
// NOMENCLATURA: -> 8 e 13, 18 e 45, cioè i DATI dell'invocazione, vengono chiamati ARGOMENTI

// generalizziamo con altri esempi

const sayHelloToAnyone = function (name = "Utente") {
  const saluto = "Buongiorno, " + name + "!"
  console.log(saluto)
}

sayHelloToAnyone("Stefano")
sayHelloToAnyone("Mario")
sayHelloToAnyone("Giangiorgio")
sayHelloToAnyone() // in questo caso il risultato sarà "utente"

const exploreArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const message = "Elemento" + ": " + arr[i] // "Elemento 0: Giorgia"
    console.log(message)
  }
}

let nameVero = ["nome", "cognome"]
exploreArray(nameVero)

// esiste anche un'ultima caratteristica delle funzioni: una funzione può avere un
// VALORE di RITORNO (keyword "return")

// esempio
// andiamo a creare una funzione per dei calcoli matematici:

const complexMath = function (valore /* PARAMETRO da assegnare */) {
  let risultato = 0 // creiamo una funzione che avrà valore base 0
  // ES. eleviamo al quadrato
  risultato = valore * valore
  // sottriamo 36
  risultato -= 36
  // per ultimo, dal numero ottenuto calcoiamo il resto di 5
  risultato = risultato % 5
  console.log(risultato) // stampiamo il risultato
}

complexMath(34)
complexMath(120)
complexMath(300)

// se ora dovessimo riutilizzare da un altra parte
// solo una parte di quella funzione, per esempio
// -36 non potremmo farlo perché fa parte di tutta la funzione

// Possiamo anche separare le varie funzioni della FUNZIONE in FUNZIONI più piccole
const elevaAlQuadrato = function (num) {
  let risultatino = num * num
  return risultatino // questo permette di far uscire il risultato al di fuori della funzione,
  // che altrimenti rimarrebbe al suo interno
}
const meno36 = function (num) {
  let risultatino = num - 36
  return risultatino
}

const restoDi5 = function (num) {
  let risultatino = num % 5
  return risultatino
}

// Scomporre una funzione grande, può essere vantaggioso perché le varie funzioni
// posso interagire tra di loro in maniera differente piuttosto che dover seguire
// la logica della funzione unica

const r1 = elevaAlQuadrato(102)
const r2 = meno36(r1)
const risultato = restoDi5(r2)

console.log(risultato)

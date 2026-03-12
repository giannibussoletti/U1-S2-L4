/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const areaRettangolo = l1 * l2
  console.log(areaRettangolo)
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (da1 = 0) {
  let differenza = Math.abs(da1 - 19)
  console.log(differenza)
  if (differenza > 19) {
    differenza *= 3
  }
  console.log(differenza)
}
crazyDiff(40)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero N come parametro, e ritorna true se N è compreso tra 20 e 100 (incluso) oppure
 se N è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1 = 0) {
  if (n1 >= 20 && n1 <= 100) {
    console.log("il numero è compreso tra 20 e 100 ", n1)
    return true
  } else if (n1 === 400) {
    console.log("il numero è uguale a 400 ", n1)
    return true
  } else {
    console.log("il numero non rispetta i parametri richiesti")
  }
}

boundary(20)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa.includes("EPICODE") === true) {
    console.log(stringa)
  } else if (stringa.includes("EPICODE") === false) {
    console.log("EPICODE " + stringa)
  }
}

epify("fa dei bei corsi")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n1) {
  if (n1 >= 1) {
    if (n1 % 7 === 0 && n1 % 3 === 0) {
      console.log("il numero " + n1 + " è un multiplo di 3 e di 7")
    } else if (n1 % 7 === 0) {
      console.log("il numero " + n1 + " è un multiplo di 7")
    } else if (n1 % 3 === 0) {
      console.log("il numero " + n1 + " è un multiplo di 3")
    } else {
      console.log(n1 + " non è un multiplo di 3 o di 7")
    }
  } else {
    console.log("questo numero non va bene")
  }
}

check3and7(10)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (stringa) {
  let dividiStringa = stringa.split("") // Divide la stringa creando un array con le singole lettere
  let arraySpecchio = dividiStringa.reverse() // inverte tutte le posizioni dei vari oggetti dell'array scambiando le posizioni da inizio a fine
  let unisciArraySpecchio = arraySpecchio.join("") // riunisce l'array
  return unisciArraySpecchio
}

r1 = reverseString("Gianni")
console.log(r1)

/* ESERCIZIO 8
 Scrivi una funzione di nome "", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (stringa = "") {
  const nuovaFrase = []
  const dividiStringa = stringa.split(" ")
  for (i = 0; i < dividiStringa.length; i++) {
    const dividiParola = dividiStringa[i].split("")
    const upperFirst = dividiParola[0].toUpperCase()
    dividiParola.unshift(upperFirst)
    dividiParola.splice(1, 1)
    const unisciParola = dividiParola.join("")
    nuovaFrase.push(unisciParola)
  }
  const fraseUnita = nuovaFrase.join(" ")
  return fraseUnita
}
stringaPrimaLettera = upperFirst("ciao sono gianni")
console.log(stringaPrimaLettera)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

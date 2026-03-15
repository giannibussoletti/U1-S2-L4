// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayCreation = function (randomN) {
  const randomArray = []
  for (let i = 0; i < randomN; i++) {
    randomArray.push(Math.floor(Math.random() * 11))
  }
  return randomArray
}

const checkArray = function (array) {
  const arrayMaggiore5 = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      arrayMaggiore5.push(array[i])
      console.log(array[i] + " è maggiore di 5")
    } else {
      console.log(array[i] + " è minore di 5")
    }
  }
  let sommaArray = 0
  for (let i = 0; i < arrayMaggiore5.length; i++) {
    sommaArray += arrayMaggiore5[i]
  }
  console.log(arrayMaggiore5)
  console.log(sommaArray)
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    id: 101,
    name: "Caffè in grani - Miscela Arabica",
    price: 12,
    quantity: 5,
  },
  {
    id: 102,
    name: "Moka Express (3 tazze)",
    price: 10,
    quantity: 1,
  },
  {
    id: 103,
    name: "Set di 4 tazzine in ceramica",
    price: 18,
    quantity: 3,
  },
  {
    id: 104,
    name: "Biscotti artigianali al burro",
    price: 505,
    quantity: 3,
  },

  {
    id: 105,
    name: "Macina caffè manuale in acciaio",
    price: 35,
    quantity: 6,
  },
  {
    id: 106,
    name: "Confezione 100 filtri in carta",
    price: 6,
    quantity: 2,
  },
  {
    id: 107,
    name: "Zucchero di canna integrale (500g)",
    price: 13,
    quantity: 4,
  },
  {
    id: 108,
    name: "Bricco per latte in acciaio inox",
    price: 120,
    quantity: 1,
  },
]

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCartTotal = function () {
  const arrayShopCart = []
  let prezzoTotale = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    const totParziale = shoppingCart[i].price * shoppingCart[i].quantity
    arrayShopCart.push(totParziale)
  }
  for (let i = 0; i < arrayShopCart.length; i++) {
    prezzoTotale += arrayShopCart[i]
  }
  console.log(prezzoTotale)
}

shoppingCartTotal()

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newItem = {
  id: 240,
  name: "Sturalavandini",
  price: 15.75,
  quantity: 1,
}

const addToShoppingCart = function (newItem) {
  shoppingCart.push(newItem)
  console.log("il totale degli elementi nel carrello è: ", shoppingCart.length)
}

addToShoppingCart(newItem)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function () {
  let maxPrice = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    for (let x = 0; x < shoppingCart.length; x++) {
      const varPriceI = shoppingCart[i].price
      const varPriceX = shoppingCart[x].price
      if (maxPrice > varPriceI && maxPrice > varPriceX) {
        maxPrice = maxPrice
      } else if (maxPrice < varPriceI) {
        maxPrice = varPriceI
      } else if (maxPrice < varPriceX) {
        maxPrice = varPriceX
      }
    }
  }
  return maxPrice
}
const finalPrice = maxShoppingCart()
console.log(finalPrice)

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (array) {
  const ultimoProdotto = shoppingCart[shoppingCart.length - 1]
  console.log(
    "il tuo ultimo prodotto nel carrello è: " +
      ultimoProdotto.name +
      " dal costo di " +
      ultimoProdotto.price +
      " e ne hai " +
      ultimoProdotto.quantity,
  )
}

/* SCRIVI QUI LA TUA RISPOSTA */

latestShoppingCart(shoppingCart)

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (valX) {
  for (let i = 0; i < 3; i++) {
    const causualNum = Math.floor(Math.random() * 10)
    if (causualNum >= valX) {
      console.log(causualNum)
    } else {
      console.log(causualNum)
      i = 0
    }
  }
}

// loopUntil(9)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalVar = [6, "A", 5, 7, "Q", 20, "R", "Z", "O", 2, 8, 3, "W", 6, "V", "Q", 5]

const averageTotal = function (array) {
  let totalVar = 0
  const arrayOnlyNumber = []
  for (let i = 0; i < array.length; i++) {
    const itsANumber = typeof array[i] === "number"
    if (itsANumber === true) {
      partVar = array[i]
      totalVar = totalVar + partVar
      arrayOnlyNumber.push(partVar)
    }
  }
  const mediaAritmentica = totalVar / arrayOnlyNumber.length
  return mediaAritmentica
}

console.log(averageTotal(totalVar))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const frasiVarie = [
  "Ciao.",
  "Il gatto dorme sul divano.",
  "Oggi il cielo sembra promettere un temporale improvviso verso sera.",
  "JavaScript è un linguaggio versatile.",
  "Nonostante le difficoltà iniziali, il team è riuscito a completare il progetto entro la scadenza prefissata.",
  "Semplice è meglio.",
  "L'autunno porta con sé il profumo delle foglie secche e delle caldarroste appena fatte.",
  "42.",
  "Viaggiare permette di aprire la mente a nuove culture e modi di pensare totalmente differenti dai nostri.",
  "Piove.",
]

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (array) {
  const splitFrasiVarie = []
  const newFrasiArray = []
  for (let i = 0; i < array.length; i++) {
    const splitting = array[i].split("")
    const pushLength = splitting.length
    splitFrasiVarie.push(pushLength)
    newFrasiArray.push(splitting.join(""))
  }
  let greaterCharNumber = 0
  let lengthBox
  for (let i = 0; i < splitFrasiVarie.length; i++) {
    for (let j = 0; j < splitFrasiVarie.length; j++) {
      const indexI = splitFrasiVarie[i]
      const indexX = splitFrasiVarie[j]
      if (greaterCharNumber > indexI && greaterCharNumber > indexX) {
        greaterCharNumber = greaterCharNumber
      } else if (greaterCharNumber < indexI) {
        greaterCharNumber = indexI
        lengthBox = [i]
      } else if (greaterCharNumber < indexX) {
        greaterCharNumber = indexX
        lengthBox = [j]
      }
    }
  }
  console.log(
    "La frase più lunga nell'array è: " +
      "'" +
      newFrasiArray[lengthBox] +
      "'" +
      " con " +
      greaterCharNumber +
      " caratteri in totale.😊",
  )
}

longest(frasiVarie)

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
  let notSpam
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM") === false) {
    notSpam = true
  } else {
    notSpam = false
  }
  return notSpam
}

emailContent = antiSpam(
  "Viaggiare permette di aprire la mente a nuove culture e modi di pensare totalmente differenti dai nostri. SPAM",
)
console.log(emailContent)

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const timePass2 = function (start) {
  const dataIniziale = new Date(start)
  const dataCorrente = new Date()

  const giornoInMS = 1000 * 60 * 60 * 24
  const diffInTempo = dataCorrente.getTime() - dataIniziale.getTime()
  const diffInGiorni = Math.round(diffInTempo / giornoInMS)

  return diffInGiorni
}

const giorniPassati = timePass2("02/13/1994")

console.log(giorniPassati)

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 [
 ["00","01","02"]
 ["10","11","12"]
 ]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = function (x, y) {
  let matriceArray = []
  const finalMatrix = []
  let indexCount = 0

  for (let i = 0; i < y; i++) {
    for (let j = indexCount; j < x; j++) {
      matriceArray.push(j)
    }
    finalMatrix.push(matriceArray)
    x += matriceArray.length
    indexCount += matriceArray.length
    matriceArray = []
  }
  return finalMatrix
}

const matrixSolution = matrixGenerator(5, 2)
console.log(matrixSolution)

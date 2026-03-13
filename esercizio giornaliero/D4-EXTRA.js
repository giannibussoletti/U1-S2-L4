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

// let primaFunzione = arrayCreation(100)
// checkArray(primaFunzione)

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

/* SCRIVI QUI LA TUA RISPOSTA */

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

loopUntil(9)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const averageTotal = function (array) {
  let totalVar = 0
  for (let i = 0; i < array.length; i++) {
    const itsANumber = typeof array[i] === "number"
    if (itsANumber === true) {
      partVar = array[i]
      totalVar = totalVar + partVar
    } else {
      totalVar
    }
  }
  return totalVar
}

totalVar = averageTotal([6, "A", 4, 7, "Q", 9, "R", "Z", "O", 2, 8, 3, "W", 6, "V", "Q", 5])
console.log(totalVar)
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

const number = [8,10,5,123,67,23,87,234,34,45];

const newNumber= []

number.forEach((item, i) => {
  let a = 3;
  let b = 6;
  let temp;
  if (i >= a && i <= b ) {
    temp = item
    newNumber.push(temp)
  }
});

console.log(newNumber);


// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

const myFunction = (array, a, b) => {
  return newArray = array.slice(a, b+1);
  return newArray;
}

let result = myFunction(number, 2, 6);
console.log(result);

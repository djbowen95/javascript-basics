// New array where elements are the square of the elements in someNumbers

let someNumbers = [ ]
let squareNumbers = [ ]

for (let i = 0; i < 1000; i++) {
  someNumbers.push(i)
}

function square (x) {
    return x * x
}

for (let i = 0; i < someNumbers.length; i++) {
    squareNumber = square(someNumbers[i])
    squareNumbers.push(squareNumber)

}

console.log(squareNumbers)

/* look up lambda notation and anonymous notation */
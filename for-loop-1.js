/* Will print all numbers up to 100 */
for (let number = 1; number <= 100; number = number + 1) {
    console.log(number)
}

/* Will print all even numbers up to 100 */
for (let number = 2; number <=100; number = number +2 ) {
    console.log(number)
}

/* Will print all odd numbers up to 100 */
for (let number = 1; number < 100; number = number + 2) {
    console.log(number)
}

/* Another way to do even numbers */
for (let number = 1; number <= 100; number = number + 1) {
    if number % 2 === 0 {
        console.log(number)
    }
}

/* Another two ways to do odd numbers */
for (let number = 1; number <= 100; number = number + 1) {
    if number % 2 !== 0 {
        console.log(number)
    }
}

for (let number = 1; number <= 100; number = number + 1) {
    if number % 2 === 1 {
        console.log(number)
    }
}

/* Example of arrays and for loops with arrays */


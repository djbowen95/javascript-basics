/* Print a grid of stars */

let n = 100
let firstLineValues = [ ]
let secondLineValues = [ ]

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        firstLineValues.push('*')
        secondLineValues.push('-')
    } else {
        firstLineValues.push('-')
        secondLineValues.push('*')
    }
}

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        console.log('|' + firstLineValues + '|')
    } else {
        console.log('|' + secondLineValues + '|')
    }
}

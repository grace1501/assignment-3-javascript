// Part 1: Fizz Buzz

for (let i=0; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Part 2: Prime Time

let n = 5; //CHANGE THIS TO YOUR NUMBER

while (true) {
    n++;
    let isPrime = true;

    //Check if n is a prime number;
    for (let i=2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    //If run the above loop and isPrime still true = n is a prime number
    if (isPrime) {
        console.log(n);
        break;
    }
}

// Part 3: Feeling Loopy

let csvData = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let row = '';
let cell = '';

for (let i = 0; i < csvData.length; i++) {
    // loop through each letter in the csv data string 
    let letter = csvData[i];

    // if the letter is \n, reaching the end of row, add current cell to row, log the row, clear current cell and current row
    if (letter === '\n'){
        row += cell;
        console.log(row);
        row = '';
        cell = '';
    }
    // if the letter is a comma, reaching the end of cell, save the cell to row, clear current cell 
    else if (letter === ','){
        cell += letter;
        row += cell;
        cell = '';
    } 
    // if just a regular letter, then add to current cell
    else {
        cell += letter;
    }
}
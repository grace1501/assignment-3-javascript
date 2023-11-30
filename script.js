// Part 1: Fizz Buzz

// for (let i=0; i <= 100; i++) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i%3 === 0) {
//         console.log("Fizz");
//     } else if (i%5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Part 2: Prime Time

let n = -10; //CHANGE THIS TO YOUR NUMBER

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

// Part 3 
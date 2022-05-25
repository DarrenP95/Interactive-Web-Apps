for (let i = 1; i<=100; i++){
    // if a number is divisible by 3and 5, the program should print Fizz-Buss
    // first one because i want to check for divisbility for either 3 or 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz-Buzz");
    }
    // if a number is divisible by 3, the program should print Fizz
    else if (i % 3 == 0){
        console.log("Fizz");
    }
    
    else if (i % 5 == 0){
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}
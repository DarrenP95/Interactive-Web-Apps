//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']

let task = ['study','eat', 'clean', 'wash', 'code', 'call', 'meet', 'schedule','sleep']





//Using the "for" loop display the value of each of these items

for (let i = 0; i < task.length; i++){

    document.getElementById("task").innerHTML = task


    //"console.log" the output, separated by a space
    //Add your code below

    console.log(task[i] + '')
};








//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6

//let calculate = 0;
//for ( let i = 0; i < task.length; i++){

    //calculate = calculate + i;

    //console.log(calculate);}


//console.log your output

//Add your code below


//Activity 3 - Using the tasks variable created above


//Create a loop that performs the 15 times table



   // program to generate a multiplication table

   // take input from the user
   //const number = parseInt(prompt('Enter an integer: '));
   //const number = 15;

   //creating a multiplication table
   //for(let i = 0; i <= 15; i++) {

    // multiply i with number
    //const result = i * number;

    // display the result
   //console.log(`${number} * ${i} = ${result}`); } 



//Leading up to the "length" of your tasks variable

//Add your code below


//Activity 4 - Edit your code in activity 3, by creating an array called timesTable


//And store each value of the your fifteen times table in it

let times = [];

for( let i = 0; i < 15; i++){

    let row = [];

    for( let j = 0; j < 15; j++){
        row.push(j);
    }

    times.push(row);
}

for(let i =0; i < times.length; i++){

    let row = times[i];

    for(let j = 0; j < row.length; j++){
        let value = row[j];
    ProcessingInstruction(value.toString);
    ProcessingInstruction.write('\t');
    }

    console.log(task)

}






//Add your code below


//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.


//Add your code below


//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.


//Add your code below


//Bonus Activity


//Repeat the output of what you produced in activity 6, this time by not using the .reduce function


//Add your code below

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1


//console.log the output

//Add your code below

//Try to replicate the above activity by using a "for in" loop instead


//Does this work? can you understand and explain why it displays what it displays?


//Add your code below
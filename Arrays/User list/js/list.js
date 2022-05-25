let database = ["Darren", "Marco", "Chad", "Roxanne", "Alapha", "Tyrell", "Amelia", "Jean", "Lootfieh", "Tishan"];

let menu = prompt(" ========== Menu ========== \n What would you like to do? \n1. Add three Users \n2. Remove User \n3. Display all users \n4. Sort users");  

let choice;

switch(menu){

    case "1":

    choice = prompt("type three users seperated by commas");
    database.push(choice);
    document.getElementById('array').innerHTML = database;

    break;

    case "2":

    choice = prompt("What is the username?");
    let index = database.indexOf(choice);
    if (index>= 0){
    database.splice(index, 1);
    }
    document.getElementById("array").innerHTML = database;

    break;

    case "3":

    database.join();
    document.getElementById('array').innerHTML = database;

    break;

    case "4":

database.sort();
document.getElementById('array').innerHTML = database;

}
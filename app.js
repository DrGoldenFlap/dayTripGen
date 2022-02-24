"use strict";

let dest = ["Boston", "Philly", "San Diago", "Houston"];
let rest = ["Olive Garden", "Mi Rancho", "McDonald's", "Taco Bell"];
let trans = ["Bike", "Walk", "Car", "Segway"];
let ent = ["Concert", "Bike Ride", "Muesam", "Fishing"];
let randDest;
let randRest;
let randTrans;
let randEnt;

function dayRandom(arr){
    return arr[Math.floor((Math.random() *arr.length))];
}

function randWelcome(){
    alert("This is a random day trip Generator! Lets get moving!!");
}
function randBye(){
    printTrip();
    alert("Yo that's it have fun!");
}
function printTrip(){
    alert(`Your trip is:
    Destination: ${randDest}
    Restaurant: ${randRest}
    Transportation ${randTrans}
    Entertainment: ${randEnt}`)
  }
function randMenu(){
    let userChoice = prompt(`What would you like to change here? 
    1. Destination 
    2. Restaurant 
    3. Transportation 
    4. Entertainment`)

    switch(userChoice){
        case "1":
            randDest = dayRandom(dest)
            printTrip();
            break;
        case "2":
            randRest = dayRandom(rest)
            printTrip();
            break;
        case "3":
            randTrans = dayRandom(trans)
            printTrip();
            break;
        case "4":
            randEnt = dayRandom(ent)
            printTrip();
            break;
        default:
            alert("Invalid")
            break;              
    }
}
function tripGood(){
    let userResponse = prompt ('Is this good?').toLowerCase();
    if(userResponse === "yes" || userResponse === "y"){
        return true;
    }
    else{
        return false;
    }
}
function tripLoop(){
    let happy = tripGood();
    while(!happy){
        randMenu();;
        happy = tripGood();
    }
}
function genTrip(){
    randWelcome();
    randDest = dayRandom(dest)
    randRest = dayRandom(rest)
    randTrans = dayRandom(trans)
    randEnt = dayRandom(ent);
    printTrip();
    tripLoop();
    randBye();
}

genTrip();
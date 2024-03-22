let Me = 'Joel'; 
const continents = '50';

let forfiv = add(4,5);
console.log(forfiv) ;
function add(num1, num2) {
    return num1 + num2;
}



function sayHello() {
    alert('Hello World!');
}
sayHello()

function checkAge(name, age) { // we are listing name and age when we call checkAge
    if (age < 21) {
        alert("Sorry " + name + ", you arent old enough to view this page!") // When doing things like this its important to understnad that the + will interfere with the quotations used to create the sting of text.
    }
}

let Charles = {
    name: 'Charles', 
    age: 21
} ;
let Abby = {
    name: 'Abby',
    age: 27
} ;
let James = {
    name: 'James',
    age: 18
} ;
let John = {
    name: 'John',
    age: 17
} ;

checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

let Vegetables = ['potato', 'cucumber', 'eggplant', 'corn']
for (let i=0; i < Vegetables.length; i++) { //this shold be called a while do loop because its written like this: let this integer start at 0. While this number is less than veggies.length, do this: i++ 
    console.log(Vegetables[i]);
}

let pet = {
        name:'Patches McGee',
        breed:'Dragon'
}
console.log(pet)

let pals = [{
    name: 'Topanga',
    age: 16
},
{
    name: 'Feeny',
    age: 209
},
{
    name: 'Goku',
    age: 53
},
{
    name: 'Vegeta',
    age: 60
}]

for(let i=0; i < pals.length; i++) {
    checkAge(pals[i].name, pals[i].age)
}

function getLength(string) {
    return string.length;
}
let length = getLength('Hello World') ;
if (length % 2 === 0) {
        console.log("The world is nice and even!");

}
 else {
    console.log("The world is an odd place!");
}

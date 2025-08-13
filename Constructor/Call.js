// function Player (name,team){
//     (this.name=name),(this.team=team)
// }

// var Player1=new Player('Dhoni','csk');
// var Player2=new Player('kohli','rcb');

// console.log(Player1.name);
// console.log(Player2.name);


let person2 ={
    name:'rahul',
};

let person3 ={
    name:'manoj',
}

function  myFunctions(age,city) {
    this.age=age;
    this.city=city;
}

myFunctions.call(person,24,'Pune');
console.log(person2);
console.log(person3);
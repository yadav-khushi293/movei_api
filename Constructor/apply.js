let person5 ={
    name:'seraj',
}

let person6={
    name:'jignesh',
}

function myFunctions(age,city){
    this.age=age;
    this.city=city;
}

myFunctions.apply(person5,[24,'pune']);

//apply=array use
//call=commas use 
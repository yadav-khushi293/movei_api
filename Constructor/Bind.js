let person6 ={
    name:'suresh',
};

let person7={
    name:'nilesh',
}

function myFunctions(age,city){
     
    this.age=age;
    this.city=city;
}

let myBind=myFunctions3.bind(person7,24,'pune');
myBind();

console.log(myBind)
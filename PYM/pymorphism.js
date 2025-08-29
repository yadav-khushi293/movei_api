class Vehicle{
    run(){
        console.log("Vehical is running");
        return 'Vehical is running'
    }
}

class Car1 {
    run(){
        console.log("car is running");
    }
}

class Truck{
    run(){
        console.log("Truck is running");
    }
}

let V1=Vehicle();
console.log("V1.run()");
let V2=Car1();
console.log("V2.run()");
let V3=Truck();
console.log("V3.run()");


class Animal{
    speak(){
        console.log("Animal speak")
    }
}

class Dog extends Animal{
     speak(){
        console.log("Animal dog")
    }
}


class cat extends Animal{
     speak(){
        console.log("Animal cat")
    }
}
function makeSound(animal){
    animal.speak();
}
let dog = new Dog();
let cat = new cat();

makeSound(dog);
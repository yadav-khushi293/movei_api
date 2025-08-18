class car{
    constructor(n,b){
        this.name=n;
        this.brand=b;
    }

    showDatails(){
        console.log(`${this.name} ${this.brand}`);
        return 'by'
    }
}


class SUV extends car{
    constructor(x,y){
        super(x,y);
     this.buyer='khushi'
    }
}

class miniSUV extends SUV {
    constructor(x,y){
        super(x,y);
        this.type='mini-svu';

    }
}

let car2=new miniSUV("audi","audi");
console.log(car2);


//////////
var car= {
type:"mini-suv",
brand:"renault",
}

function printBrand(object){
    console.log(object.brand);
}

printBrand(car);

var car1 ={
    type:"min-svu",
    brand:"renault",
    printthevalue:function(){
        console.log(this.brand);
    },
};
car1.printthevalue();

//first oops concept is

//1-Inheritance-->that allows you to borrow the property of object.
//2-Encapsulation-->create private variable
//3-Abstraction-->hide the complexity
//4-polymorphism-->basically one  common have every class with deferent value.
class cars{
    #count //private variable you cannot access out side of it 
    constructor(n,b){
        this.name=n;
        this.brand=b;
        this.#count=1000;
    }
    
    showDetails(){
        console.log(`${this.name} ${this.brand} ${this.#count}`)
    }

    getCount(){
        return this.#count;//Getter mathod to acess private filed
    }
}

let C11=new cars("thar","MahIndra");

console.log(C11,"this is the encapsulation");
console.log(C11,getCount());//now we can see private value
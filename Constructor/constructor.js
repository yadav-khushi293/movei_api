function car(make,modal,year){
   (this.make=make),
   (this.modal=modal),
   (this.year=year);
}

const car1=new car('toyota','toyota',1990);
console.log(car1);


const person ={
    name:'beena',
    myFunc : function (){
        console.log(this.name);
    },
};
person.myFunc();
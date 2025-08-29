
const justFunction=()=>{
    let n="mehfooz";//this giog to garbage
    return()=>{
        let n = "Hello";
        return n;
    };
};
console.log(justFunction()());

/* It Closes The Variable That Are Dependence Its Like Frezzes Then Its Doesnt Allow Them To Destroyed  Only There Is Some Dependence, And What That Means Of Dependences Was => A Child Function Need A Variable From A Parent Function Even Those Parent Function Had Been Called Or After The Function Called The Varaible Destroyed But The Parent Function Share The Variable To The Child Function.
*/

/**parameter kivabe declarer kore seta sikhchi*/
// common function 
function doubleIt (num){
    return num * 2 ;
}

const result = doubleIt(5);
console.log(result);

//variable type function
const double = function d_daw(num){
    return num * 2;
} 
const dawNa = double(100);
console.log(dawNa);

// Arrow function
//es6 single parameter easy type function  declaration 
const doubleIt2 = (num) => num * 2;
const result2 = doubleIt(10);
console.log(result2);
//es6 multiply parameter function declaration
const add = (x, y) => (x + y) *2;
const result3 = add (10, 5);
console.log(result3);
// es6 no parameter function

const giveMe10 = () => 10;
const giveMe = giveMe10();
console.log(giveMe);

//es6 multiline arrow function

const bishalMath = (x, y = 0) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}

const math = bishalMath(12, );
console.log(math);

let text = ("hello world");
console.log(text[1]);

let number = 8;
console.log (number);
number = 8.9999;
console.log (number);

    
console.log((5.1234).toPrecision(3));

function number(x , y){
    const result = Number.parseInt(x , y)
    if(Number.isNaN(result)){
        return 0;
    }
    return result * 10
}
console.log(number('5 , 10'))


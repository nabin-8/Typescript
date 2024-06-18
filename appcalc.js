// number
// string
// string[]
// boolean
// let number1=10;
// function calculate(num1: number, num2: number){
//     return num1+num2;
// }
//   calculate(number1,20);
function getTotal(numbers) {
    return numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
}
console.log(getTotal([3, 2, 1]));

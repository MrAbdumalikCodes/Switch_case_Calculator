let num1 = prompt('Enter your first number !')
let op  = prompt('Enter opertator!')
let num2 = prompt('Enter your second number')

switch(op){
    case'+':
        console.log(+num1 + +num2);
    break;
    case'-':
        console.log(num1-num2)
    break;
    case'*':
        console.log(num1*num2)
    break;
    case'/':
        console.log(num1/num2)
    break;
    default:
        console.log('Invalid number')
    break;    
}

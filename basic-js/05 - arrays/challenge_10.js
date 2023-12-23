/*
Create a program that is able to scroll through a list of numbers and print each even number found
*/

let numbers = [];

for(let i = 0; i < 20; i++){
    numbers.push(i); //adds to the end of the array
    // numbers.pop -> remove from the end of the array
    // numbers.shift -> remove from beginning of array
    // numbers.splice -> removes according to the position passed as a parameter
}

console.log(numbers);

for(let i = 0; i < numbers.length; i++){
    const num = numbers[i]

    if(num % 2 === 0){
        console.log(num);
    }
}

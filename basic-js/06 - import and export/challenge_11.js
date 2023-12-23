const {gets, print} = require('./support_functions');

/* Object Destructuring
    const person = {
        name: 'Pedro
    };

    const { name } = person; === const name = person.name;
*/

/*
A room contains 5 students and each student has been assigned a number from 1-100.
Make a program that receives the 5 numbers drawn for the students and shows the highest number drawn.
*/
let highestNum = 0;

for(let i = 0; i < 5; i++){
    const drawnNum = gets();
    print(drawnNum);

    if(drawnNum > highestNum){
        highestNum = drawnNum;
    }
}

print('Highest number: '+ highestNum);

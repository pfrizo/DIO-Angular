/*
Create an algorithm which, given the 3 grades obtained by a student, 
calculates and prints their average and their classification, as shown in the table below:

Grade:
average less than 5: fail
average between 5 and 7: recovery
average above 7: pass;

grade Average = (grade 1 + grade 2 + grade 3) / 3;
*/

const grade1 = 7;
const grade2 = 7;
const grade3 = 8;

const average = (grade1 + grade2 + grade3) / 3;

if(average < 5){
    console.log('Average grade: ' + average.toFixed(2) + '(Fail)');
} else if (average >= 5 && average <= 7){
    console.log('Average grade: ' + average.toFixed(2) + '(Recovery)')
} else {
    console.log('Average grade: ' + average.toFixed(2) + '(Pass)')
}
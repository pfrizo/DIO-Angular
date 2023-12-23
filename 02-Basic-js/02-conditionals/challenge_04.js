/* 
BMI - Body Mass Index is a WHO (World Health Organization) criterion for giving an indication of the weight status of an adult person.

BMI formula:
BMI = weight / (height * height)

Create an algorithm that, given an adult's weight and height, shows their condition according to the table below

below 18.8, underweight;
between 18.5 and 25, normal weight;
between 25 and 30, overweight;
between 30 and 40, obesity;
over 40, severe obesity;
*/

const weight = 68;
const height = 1.73;

const BMI = weight / Math.pow(height, 2);

console.log(BMI.toFixed(2));

if (BMI < 18.5){
    console.log('underweight');
} else if (BMI >= 18.5 && BMI < 25){
    console.log('normal weight');
} else if (BMI >= 25 && BMI < 30){
    console.log('overweight');
} else if (BMI >= 30 && BMI < 40){
    console.log('obesity');
} else {
    console.log('severe obesity');
}
/*
Create a class to represent people.
For each person we'll have the attributes name, weight and height
People must be able to tell you the value of their BMI;
Instantiate a person called John who weighs 70 kg and is 1.75 tall and ask John to tell you the value of his BMI.
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calcBmi(){
        return (this.weight / Math.pow(this.height, 2));
    }

    classifyBmi(){
        const bmi = this.calcBmi();

        if (bmi < 18.5){
            return 'underweight';
        } else if (bmi >= 18.5 && bmi < 25){
            return 'normal weight';
        } else if (bmi >= 25 && bmi < 30){
            return 'overweight';
        } else if (bmi >= 30 && bmi < 40){
            return 'obesity';
        } else {
            return 'severe obesity';
        }
    }
}

const John = new Person('John', 70, 1.75);

console.log(`${John.name}'s BMI is: ${John.classifyBmi()}`);
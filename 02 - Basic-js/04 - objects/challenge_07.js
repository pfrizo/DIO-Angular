/*
Create a class to represent cars.
The cars have a brand, a color and an average fuel cost per km driven.
Create a method that, given the number of kilometers and the price of fuel, gives us the amount spent to make this journey.
*/

class Car {
    brand;
    color;
    averageFuelCost;

    constructor(brand, color, averageFuelCost) {
        this.brand = brand;
        this.color = color;
        this.averageFuelCost = averageFuelCost;
    }

    calcJourneyCost(distance, fuelPrice){
        return (distance * this.averageFuelCost * fuelPrice);
    }
}

const hb20 = new Car('Hyundai', 'silver', 1/9);
console.log(hb20);
console.log('Journey cost: $' + hb20.calcJourneyCost(230, 4.60).toFixed(2));
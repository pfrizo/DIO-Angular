/* Make a program to calculate the cost of a trip

    You will have 3 variables. These are
    1 - Fuel price
    2 - The car's average fuel consumption per KM
    3 - Distance in KM of the trip
*/

let fuelPrice = 5;
let averageConsumption = 0.1;
let distance = 150;

let tripCost = distance * averageConsumption * fuelPrice;

console.log("Trip value: $" + tripCost.toFixed(2));
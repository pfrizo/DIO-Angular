/* Make a program to calculate the cost of a trip

    You will have 5 variables. These are
    1 - Price of ethanol
    2 - Price of gasoline
    3 - Type of fuel
    4 - The car's average fuel consumption (KM/L)
    5 - Distance in KM of the trip

*/

const ethanolPrice = 4;
const gasolinePrice = 5;

const fuelType = 'gasoline';

const averageConsumption = 10;
const distance = 200;

const totalConsumption = distance / averageConsumption;
let tripCost;

if(fuelType === 'ethanol'){
    tripCost = totalConsumption * ethanolPrice;
    console.log('Trip Cost: $' + tripCost.toFixed(2) + ' (Ethanol)')
} else if(fuelType === 'gasoline'){
    tripCost = totalConsumption * gasolinePrice;
    console.log(`Trip Cost: $${tripCost.toFixed(2)} (Gasoline)`);
} else {
    console.log('Invalid fuel type!');
}
/**
 * variables
 */

//primitive: boolean, number, string
let active: boolean = false;
let _name: string = "pedro";
let age: number = 20;
let height: number = 1.75;

// special null, undefined
let _null: null = null;
let _undefined: undefined = undefined;

//comprehensive: any, void
let _return: void;
let returnView: any = false;

//object - no predictability
let product: object = {
  name: "pedro",
  city: "sp",
  age: 20,
};

//typed object - predictable
type StoreProduct = {
  name: string;
  value: number;
  unit: number;
};

let meuProduto: StoreProduct = {
  name: "shoes",
  value: 89.99,
  unit: 5,
};

/**
 * arrays
 */

let data: string[] = ["pedro", "bia", "henrique"];
let data2: Array<string> = ["pedro", "bia", "henrique"];

let infos: (string | number)[] = [322, "pedro"];

/**
 * Tuple    s
 */
let boleto: [string, number, number] = ["water bill", 199.9, 32342342];

/**
 * arrays methods
 */
data.pop();

/**
 * Dates
 */
let birthday: Date = new Date("2022-12-01 05:00");
console.log(birthday.toString());
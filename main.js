import { vehicle } from "./Vehicle.js";
import { bicycle } from "./Bicycle.js";

let v = new vehicle();
console.log(v.color, v.wheels); // blue  4
v.honkHorn(); // beep beep


let b = new bicycle();
console.log(b.color, b.wheels); // blue  2
b.honkHorn(); //honk honk
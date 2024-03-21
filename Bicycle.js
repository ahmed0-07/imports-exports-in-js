import {vehicle} from "./Vehicle.js";

export class bicycle extends vehicle{
    constructor(color = "blue", wheels = 2, horn = "honk honk"){
        super(color, wheels, horn);
    }
}

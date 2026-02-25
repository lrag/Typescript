import { Pajaro } from './Pajaro';
import { Volador } from './Volador';
import { Andador } from './Andador';

export class Gorrion extends Pajaro implements Volador, Andador {

    constructor() {
        super("Passer domesticus");
    }

    public volar(): void {
        console.log("Soy el gorrión y vuelo");
    }

    public andar(): void {
        console.log("Soy el gorrión y ando");
    }
    
    public voz(): void {
        console.log("Soy el gorrión y pio pio");
    }
    
}
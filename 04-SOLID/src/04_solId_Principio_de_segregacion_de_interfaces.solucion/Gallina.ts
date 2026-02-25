import { Pajaro } from './Pajaro';
import { Andador } from './Andador';

export class Gallina extends Pajaro implements Andador {

    constructor() {
        super("Gallus gallus domesticus");
    }

    public andar(): void {
        console.log("Soy la gallina y ando");
    }
    
    public voz(): void {
        console.log("Soy la gallina y digo cooo cocococo");
    }
    
}
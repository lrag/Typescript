import { Pajaro } from './Pajaro';
import { Volador } from './Volador';
import { Andador } from './Andador';
import { Nadador } from './Nadador';

export class Pato extends Pajaro implements Volador, Andador, Nadador {

	constructor() {
        super("Anatidae");
    }

	public volar(): void {
		console.log("Soy el pato y vuelo!");
	}
	
	public nadar(): void {
		console.log("Soy el pato y nado");
	}
	
	public andar(): void {
		console.log("Soy el pato y ando");
	}
	
	public voz(): void {
		console.log("Soy el pato y digo cuac cuac");
	}
	
}
import { Pajaro } from './Pajaro';

export class Pato implements Pajaro {

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
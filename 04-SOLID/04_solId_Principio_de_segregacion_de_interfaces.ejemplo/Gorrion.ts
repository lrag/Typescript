import { Pajaro } from './Pajaro';

export class Gorrion implements Pajaro {

	public volar(): void {
		console.log("Soy el gorrión y vuelo");
	}
	
	public nadar(): void {
		// Otra víctima de una interfaz demasiado ambiciosa
		throw new Error("Soy el gorrión y me ahogo");
	}
	
	public andar(): void {
		console.log("Soy el gorrión y ando");
	}
	
	public voz(): void {
		console.log("Soy el gorrión y pio pio");
	}
	
}
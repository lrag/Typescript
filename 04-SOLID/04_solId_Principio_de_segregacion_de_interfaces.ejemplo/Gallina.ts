import { Pajaro } from './Pajaro';

export class Gallina implements Pajaro {

	public volar(): void {
		throw new Error("Soy la gallina y no vuelo!");
	}
	
	public nadar(): void {
		throw new Error("Soy la gallina y me ahogo");
	}
	
	public andar(): void {
		console.log("Soy la gallina y ando");
	}
	
	public voz(): void {
		console.log("Soy la gallina y digo cooo cocococo");
	}
	
}
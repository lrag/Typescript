import { Memoria } from './Memoria';

export class EEPROM extends Memoria {

	public leer(direccion: number): number {
		console.log("Leyendo en EEPROM");
		return 0;
	}

	public escribir(direccion: number, valor: number): void {
		console.log("Escribiendo en EEPROM, no sin cierta dificultad y esfuerzo");
	}

}
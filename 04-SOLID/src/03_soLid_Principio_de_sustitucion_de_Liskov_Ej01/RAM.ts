import { Memoria } from './Memoria';

export class RAM extends Memoria {

	public leer(direccion: number): number {
		console.log("Leyendo en RAM");
		return 0;
	}

	public escribir(direccion: number, valor: number): void {
		console.log("Escribiendo en RAM");
	}

}
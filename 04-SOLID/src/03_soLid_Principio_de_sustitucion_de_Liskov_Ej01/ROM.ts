import { Memoria } from './Memoria';

export class ROM extends Memoria {

	public leer(direccion: number): number {
		console.log("Leyendo en ROM");
		return 0;
	}

	public escribir(direccion: number, valor: number): void {
		throw new Error("No se puede escribir en una ROM!");
	}

}
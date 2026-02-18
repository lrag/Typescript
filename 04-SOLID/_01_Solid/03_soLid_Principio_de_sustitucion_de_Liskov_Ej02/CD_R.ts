import { DiscoGrabable } from './DiscoGrabable';

export class CD_R extends DiscoGrabable {

	private _grabado: boolean = false;
	
	public override leer(direccion: number): number {
		console.log("Leyendo del CD-R");
		return 0;
	}

	public isGrabado(): boolean {
		return this._grabado;
	}

	public override escribir(direccion: number): void {
		// No hace lo que dicta la superclase (escribir siempre que se pida)
		if (this._grabado) {
			throw new Error("El disco ya está grabado!");
		}
		console.log("Grabando en el CD-R");
		this._grabado = true;
	}
	
}
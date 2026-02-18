import { DiscoGrabable } from './DiscoGrabable';

export class CD_RW extends DiscoGrabable {

	private grabado: boolean = false;
	
	public override leer(direccion: number): number {
		console.log("Leyendo del CD-RW");
		return 0;
	}

	public override escribir(direccion: number): void {
		console.log("Grabando en el CD-RW");
	}
	
}
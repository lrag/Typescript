import { Disco } from './Disco';

export class CD_ROM extends Disco {

	public override leer(direccion: number): number {
		console.log("Leyendo del CD-ROM");
		return 0;
	}	
	
}
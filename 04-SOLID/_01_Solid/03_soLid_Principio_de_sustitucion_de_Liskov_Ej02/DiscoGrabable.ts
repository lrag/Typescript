import { Disco } from './Disco';

export abstract class DiscoGrabable extends Disco {

	public abstract escribir(direccion: number): void;
	
}
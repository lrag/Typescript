export abstract class Memoria {

	protected size!: number; //OPCIONAL. A disfrutar.

	public abstract leer(direccion: number): number;
	public abstract escribir(direccion: number, valor: number): void;
	
}
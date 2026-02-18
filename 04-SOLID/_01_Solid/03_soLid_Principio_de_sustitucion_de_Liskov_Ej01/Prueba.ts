import { Memoria } from './Memoria';
import { RAM } from './RAM';
import { EEPROM } from './EEPROM';
import { ROM } from './ROM';

export class Aplicacion {

	public static main(): void {
		
		console.log("===================================");
		
		const memorias: Memoria[] = [
			new RAM(),
			new EEPROM(),
			new ROM()
		];

		//Un forEach :)
		for (const m of memorias) {
			m.leer(1);
			//m.escribir(1, 0);
		}
		
		console.log("==================================");
		for (const m of memorias) {
			m.leer(1);
			//Como no esta respetando el principio de sustitución de Barbara necesitamos este
			//horrendo if y su instanceof
			if (m instanceof RAM || m instanceof EEPROM) {
				m.escribir(1, 0);
			}
		}
		
	}
	
}

Aplicacion.main();
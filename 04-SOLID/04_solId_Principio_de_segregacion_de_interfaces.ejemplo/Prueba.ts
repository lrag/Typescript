import { Gallina } from './Gallina';
import { Gorrion } from './Gorrion';
import { Pato } from './Pato';

export class Aplicacion {

	public static main(): void {
		
		const ga = new Gallina();
		const go = new Gorrion();
		const lucas = new Pato();
		
		// El cliente tiene acceso a más métodos de los que necesita
		
        try {
            ga.volar(); // ¿Para qué? 
        } catch (e: any) {
            console.error("Gallina dice: " + e.message);
        }

        try {
            go.nadar(); // ?? 
        } catch (e: any) {
            console.error("Gorrión dice: " + e.message);
        }
				
	}
	
}
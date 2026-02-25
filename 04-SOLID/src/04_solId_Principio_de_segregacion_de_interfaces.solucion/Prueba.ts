import { Volador } from './Volador';
import { Andador } from './Andador';
import { Nadador } from './Nadador';
import { Gallina } from './Gallina';
import { Gorrion } from './Gorrion';
import { Pato } from './Pato';

export class Aplicacion {

    public static main(): void {
        
        //Asignación a la interfaz: Solo vemos lo que la interfaz permite
        const ga: Andador = new Gallina();
        const go: Volador = new Gorrion();
        const lucas: Nadador = new Pato();
        
        //ga.volar(); //No transpila
        //go.nadar(); //ídem
        
        go.volar();
        lucas.nadar();
        
        console.log("--- Lista de Voladores ---");
        
        //Polimorfismo del bueno
        const voladores: Volador[] = [];
        voladores.push(new Gorrion());		
        voladores.push(new Pato());
        //voladores.push(new Gallina()); //No transpila
        
        for (const v of voladores) {
            v.volar();
        }
    }
}

Aplicacion.main();
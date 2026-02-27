import { Disco } from './Disco';
import { DiscoGrabable } from './DiscoGrabable';
import { CD_ROM } from './CD_ROM';
import { CD_R } from './CD_R';
import { CD_RW } from './CD_RW';

export class Aplicacion {

    public static main(): void {
        
        const discos: Disco[] = [
            new CD_ROM(),
            new CD_R(),
            new CD_RW()
        ];

        const discos2: DiscoGrabable[] = [
            //new CD_ROM(),
            new CD_R(),
            new CD_RW()
        ];
        
        console.log("===================================");        
        for (const d of discos) {
            d.leer(0);
            //d.escribir(1); 
        }
        
        console.log("===================================");        
        for (const d of discos2) {
            d.leer(0);
            d.escribir(1); 
        }
        
        //:( 
        console.log("===================================");        
        try {
            for (const d of discos2) {
                d.leer(0);
                d.escribir(2); 
            }
        } catch (e: any) {
            console.error("ZASCA: " + e.message);
        }
        
    }
    
}

Aplicacion.main();
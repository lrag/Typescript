import { Producto } from './Producto';
import { TipoProducto } from './TipoProducto';
import { ServicioProductos_MAL } from './ServicioProductos_MAL';
import { ServicioProductos } from './ServicioProductos';
import { ServicioProductosHardware } from './ServicioProductosHardware';
import { ServicioProductosSoftware } from './ServicioProductosSoftware';

function main(): void {
    try {
        console.log("===============================================");
        const p1 = new Producto("Teclado AT", TipoProducto.HARDWARE);
        const p2 = new Producto("Witcher 3", TipoProducto.SOFTWARE);
        
        const spm = new ServicioProductos_MAL();
        spm.altaProducto(p1);
        spm.altaProducto(p2);

        console.log("===============================================");

        //El polimorfismo va a llegar
        const sph: ServicioProductos = new ServicioProductosHardware();
        const sps: ServicioProductos = new ServicioProductosSoftware();
        
        sph.altaProducto(p1);
        sps.altaProducto(p2);
        
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
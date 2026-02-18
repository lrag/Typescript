import { ServicioProductos } from './ServicioProductos';
import { Producto } from './Producto';

export class ServicioProductosHardware implements ServicioProductos {

    // En TypeScript, la implementación de la interfaz es implícita al usar 'implements'
    public altaProducto(producto: Producto): void {
        
        // 1-Ahora hay que validar algo del producto y hacer otras cosas comunes a todos los tipos de productos
        if (producto.nombre) {
            throw new Error("Producto invalido");
        }

        console.log("Cosas particulares de los productos tipo Hardware");
        
        console.log("Alta del producto: " + producto.toString());
    }

}
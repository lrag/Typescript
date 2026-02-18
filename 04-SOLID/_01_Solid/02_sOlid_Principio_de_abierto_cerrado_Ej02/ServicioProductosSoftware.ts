import { ServicioProductos } from './ServicioProductos';
import { Producto } from './Producto';

export class ServicioProductosSoftware implements ServicioProductos {

    public altaProducto(producto: Producto): void {
        // 1-Insertar el producto y poco más
        
        // 2-Ahora hay que validar algo del producto: bien
        if (!producto.nombre) {
            throw new Error("Producto invalido");
        }

        console.log("Cosas particulares de los productos tipo Software");
        
        console.log("Alta del producto: " + producto.toString());
    }

}
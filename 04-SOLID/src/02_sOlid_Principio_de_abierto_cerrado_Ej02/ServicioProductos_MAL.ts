import { Producto } from './Producto';
import { TipoProducto } from './TipoProducto';

export class ServicioProductos_MAL {

    public altaProducto(producto: Producto): void {
        
        // 1-Insertar el producto y poco más
        
        // 2-Validar algo del producto: bien
        if (producto.nombre === null || producto.nombre === undefined || producto.nombre === "") {
            throw new Error("Producto invalido");
        }

        // 3-Dos maneras de insertar el producto dependiendo del tipo MAL
        switch (producto.tipo) {
            case TipoProducto.HARDWARE:
                console.log("Cosas particulares de los productos tipo Hardware");
                break;
            case TipoProducto.SOFTWARE:
                console.log("Cosas particulares de los productos tipo Software");
                break;
        }
        
        console.log("Alta del producto: " + producto.toString());
    }

}
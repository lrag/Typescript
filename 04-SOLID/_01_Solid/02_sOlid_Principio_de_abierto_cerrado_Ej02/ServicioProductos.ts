import { Producto } from './Producto';

// Esta es la clase que queda cerrada
export interface ServicioProductos {

    altaProducto(producto: Producto): void;
    
}
import { AltaProductoStrategy } from './AltaProductoStrategy';
import { Producto } from './Producto';

export class ServicioProductos {

	private altaProductoStrategy: AltaProductoStrategy;
	
	//Tambien podríamos recibir la estrategia en una propiedad
	public constructor(altaProductoStrategy: AltaProductoStrategy) {
		this.altaProductoStrategy = altaProductoStrategy;
	}

	public altaProducto(producto: Producto): void {
		
		//1-Validar el producto y otra serie de tareas comunes para todos los tipos de productos
		if (!producto.nombre) {
			throw new Error("Producto invalido");
		}
		
		this.altaProductoStrategy.ejecutar(producto);
		
		console.log("Alta del producto: " + producto.toString());
	}
	
}
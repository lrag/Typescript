import { AltaProductoStrategy } from './AltaProductoStrategy';
import { Producto } from './Producto';

export class AltaProductoSoftwareStrategy implements AltaProductoStrategy {

	public ejecutar(producto: Producto): void {
		console.log("Cosas particulares de los productos tipo Software");		
	}

}
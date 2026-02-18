import { AltaProductoStrategy } from './AltaProductoStrategy';
import { Producto } from './Producto';

export class AltaProductoHardwareStrategy implements AltaProductoStrategy {

	public ejecutar(producto: Producto): void {
		console.log("Cosas particulares de los productos tipo Hardware");		
	}

}
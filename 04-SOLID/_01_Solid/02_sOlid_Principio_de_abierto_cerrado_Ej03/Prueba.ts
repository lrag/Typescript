import { Producto } from './Producto';
import { TipoProducto } from './TipoProducto';
import { ServicioProductos } from './ServicioProductos';
import { AltaProductoHardwareStrategy } from './AltaProductoHardwareStrategy';
import { AltaProductoSoftwareStrategy } from './AltaProductoSoftwareStrategy';
import { AltaProductoConsultoriaStrategy } from './AltaProductoConsultoriaStrategy';

export class Aplicacion {

	public static main(): void {
		
		console.log("===============================================");
		const p1: Producto = new Producto("Teclado AT", TipoProducto.HARDWARE);
		const p2: Producto = new Producto("Witcher 3", TipoProducto.SOFTWARE);
		const p3: Producto = new Producto("Movidas gordísimas", TipoProducto.CONSULTORIA);
		
		const sph: ServicioProductos = new ServicioProductos(new AltaProductoHardwareStrategy());
		const sps: ServicioProductos = new ServicioProductos(new AltaProductoSoftwareStrategy());
		const spc: ServicioProductos = new ServicioProductos(new AltaProductoConsultoriaStrategy());
		
		sph.altaProducto(p1);
		sps.altaProducto(p2);
		spc.altaProducto(p3);
		
	}
	
}

Aplicacion.main();
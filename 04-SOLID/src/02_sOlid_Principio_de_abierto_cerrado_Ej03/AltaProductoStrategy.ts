import { Producto } from './Producto';

export interface AltaProductoStrategy {

	//Lo normal es que el método de la estrategia se llame ejecutar, pero
	//que no se llame así no hace que esto deje de ser un Strategy
	ejecutar(producto: Producto): void;

}
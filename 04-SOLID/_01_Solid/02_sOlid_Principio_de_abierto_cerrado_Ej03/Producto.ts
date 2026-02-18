import { TipoProducto } from './TipoProducto';

export class Producto {

    public constructor(
        public nombre: string = "", 
        public tipo: TipoProducto = TipoProducto.HARDWARE
    ) {
    }

    public toString(): string {
        return `Producto [nombre=${this.nombre}, tipo=${this.tipo}]`;
    }

}
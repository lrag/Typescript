export class Cliente {

    constructor(
        public id?: number,
        public nombre?: string,
        public direccion?: string,
        public telefono?: string
    ) {}

    public toString(): string {
        return `Cliente [id=${this.id}, nombre=${this.nombre}, direccion=${this.direccion}, telefono=${this.telefono}]`;
    }

}
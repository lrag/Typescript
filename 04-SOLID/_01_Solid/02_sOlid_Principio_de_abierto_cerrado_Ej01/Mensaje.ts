export class Mensaje {
    constructor(
        public destinatario: string = "",
        public texto: string = ""
    ) {}

    public toString(): string {
        return `Mensaje [destinatario=${this.destinatario}, texto=${this.texto}]`;
    }
}
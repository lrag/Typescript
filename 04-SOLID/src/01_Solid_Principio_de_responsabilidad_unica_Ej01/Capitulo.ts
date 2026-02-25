export class Capitulo {

    constructor(
        public numero?: number, 
        public titulo?: string, 
        public texto? : string) {
    }

    public imprimir_MAL(): void {
        console.log("Capítulo " + this.numero);
        console.log();
        console.log(this.titulo);
        console.log();
        console.log(this.texto);
        console.log();
    }

    public formatearTexto(): string {
        let texto: string = "";
        texto += "Capítulo " + this.numero;
        texto += "\n\n";
        texto += this.titulo;
        texto += "\n\n";
        texto += this.texto;
        texto += "\n\n";
        return texto;
    }

}
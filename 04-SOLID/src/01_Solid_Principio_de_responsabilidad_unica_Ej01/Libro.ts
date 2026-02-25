import { Capitulo } from "./Capitulo"

export class Libro {

    constructor(
        public titulo   : string, 
        public autor    : string, 
        public year     : number, 
        public capitulos: Capitulo[]) {
    }

    //Esto hace tres cosas
    //Sabe imprimir el libro
    //Sabe imprimir el capítulo
    //Y lo hace por consola
    public imprimir_MAL(): void {
        console.log(this.titulo);
        console.log(this.autor + ", " + this.year);
        console.log();

        /*
        for (const capitulo of this.capitulos) {
            console.log("Capítulo " + capitulo.getNumero());
            console.log();
            console.log(capitulo.getTitulo());
            console.log();
            console.log(capitulo.getTexto());
            console.log();
        }
        */

        this.capitulos.forEach(capitulo => {
            console.log("Capítulo " + capitulo.numero);
            console.log();
            console.log(capitulo.titulo);
            console.log();
            console.log(capitulo.texto);
            console.log();
        });

        console.log("FIN");
    }

    //Un poco mejor, delega en el capítulo la responsabilidad de imprimirse
    public imprimir_MAL_2(): void {
        console.log(this.titulo);
        console.log(this.autor + ", " + this.year);
        console.log();
        this.capitulos.forEach(capitulo => {
            capitulo.imprimir_MAL();
        });
        console.log("FIN");
    }

    public formatearTexto(): string {
        let texto: string = "";
        texto += this.titulo;
        texto += "\n\n";
        texto += this.autor + ", " + this.year;
        texto += "\n\n";
        this.capitulos.forEach(capitulo => {
            texto += capitulo.formatearTexto();
        });
        texto += "FIN";
        return texto;
    }
    
}
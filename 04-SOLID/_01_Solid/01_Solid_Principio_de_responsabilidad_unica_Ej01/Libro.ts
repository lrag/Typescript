import { Capitulo } from './Capitulo';

export class Libro {
  // En TS podemos definir y asignar propiedades directamente en el constructor
  // Usamos 'public' o 'private' para que TS cree la propiedad automáticamente
  constructor(
    private _titulo: string = "",
    private _autor: string = "",
    private _year: number = 0,
    private _capitulos: Capitulo[] = []
  ) {}

  // Getters y Setters (Sintaxis nativa de TS/JS)
  get titulo(): string { return this._titulo; }
  set titulo(value: string) { this._titulo = value; }

  get autor(): string { return this._autor; }
  set autor(value: string) { this._autor = value; }

  get year(): number { return this._year; }
  set year(value: number) { this._year = value; }

  get capitulos(): Capitulo[] { return this._capitulos; }
  set capitulos(value: Capitulo[]) { this._capitulos = value; }

  /**
   * Este método hace demasiadas cosas (Imprimir + Lógica de formato)
   */
  public imprimir_MAL(): void {
    console.log(this._titulo);
    console.log(`${this._autor}, ${this._year}\n`);

    for (const capitulo of this._capitulos) {
      console.log(`Capítulo ${capitulo.numero}\n`);
      console.log(capitulo.titulo + "\n");
      console.log(capitulo.texto + "\n");
    }

    console.log("FIN");
  }

  /**
   * Un poco mejor: delega la responsabilidad al capítulo
   */
  public imprimir_MAL_2(): void {
    console.log(this._titulo);
    console.log(`${this._autor}, ${this._year}\n`);
    
    this._capitulos.forEach(capitulo => {
      capitulo.imprimir_MAL();
    });
    
    console.log("FIN");
  }

  public formatearTexto(): string {
    let texto = `${this._titulo}\n\n`;
    texto += `${this._autor}, ${this._year}\n\n`;
    
    texto += this._capitulos
      .map(capitulo => capitulo.formatearTexto())
      .join("");
      
    texto += "FIN";
    return texto;
  }

}
export class Capitulo {
    private _numero: number;
    private _titulo: string;
    private _texto: string;

    constructor(numero: number = 0, titulo: string = "", texto: string = "") {
        this._numero = numero;
        this._titulo = titulo;
        this._texto = texto;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        if (value < 0) {
            throw new Error("El número de capítulo no puede ser negativo");
        }
        this._numero = value;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    get texto(): string {
        return this._texto;
    }

    set texto(value: string) {
        this._texto = value;
    }

    public imprimir_MAL(): void {
        console.log(`Capítulo ${this._numero}\n`);
        console.log(`${this._titulo}\n`);
        console.log(`${this._texto}\n`);
    }

    public formatearTexto(): string {
        return `Capítulo ${this._numero}\n\n${this._titulo}\n\n${this._texto}\n\n`;
    }
}
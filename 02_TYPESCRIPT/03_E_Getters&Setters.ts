
export class Pelicula_1 {
    constructor(
        public id      : number,
        public titulo  : string,
        public director: string,
        public genero  : string,
        public year    : number
    ) {}
}

const p1 = new Pelicula_1(1,"","","",1)
p1.year = 2000
p1.year = 1800

export class Pelicula_2 {
    constructor(
        private _id      : number,
        private _titulo  : string,
        private _director: string,
        private _genero  : string,
        private _year    : number
    ) {}

    //ID
    get id(): number {
        console.log("Accediendo a ID")
        return this._id;
    }
    set id(value: number) {
        console.log("Asignando ID")
        this._id = value;
    }

    //TITULO
    public getTitulo():any{ return '2001'}
    public setTilulo(titulo:any){}

    get titulo(): string {
        return this._titulo;
    }
    set titulo(value: string) {
        this._titulo = value;
    }

    //DIRECTOR
    get director(): string {
        return this._director;
    }
    set director(value: string) {
        this._director = value;
    }

    //GENERO
    get genero(): string {
        return this._genero;
    }
    set genero(value: string) {
        this._genero = value;
    }

    //YEAR
    get year(): number {
        return this._year;
    }
    set year(value: number) {
        if(value<=1900){
            throw new Error("DE KE BAS HIMBEZIL!")
        }
        this._year = value;
    }

}

let p2 = new Pelicula_2(1,"Alien","RS","CI-FI",1979)

//Se accede con el punto y sin invocar expresamente el get o el set
p2.id = 100
let x = p2.id

p2.setTilulo("2001")
p2.titulo = "2001"





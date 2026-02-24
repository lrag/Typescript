//En TypeScript no existen las clases 'final'
abstract class Animal {
    public nombre?:string
    public peso?:number
    public edad?:number

    public vivir():void{
        console.log("Pues aqui estoy, pasando el rato")
    }

    public abstract saludar():void

    //En TypeScript no existen los métodos 'no sobreescribibles'

}

class Perro extends Animal{

    public numeroPulgas:number = 0

    //RAZA
    public morder(){
        console.log("ÑACA")
    }

    //Sobreescritura de métodos
    public saludar(): void {
        console.log("Hola, soy el perro "+this.nombre+" y digo GUAU GUAU")
    }
}

class Gato extends Animal{

    public longitudBigotes:number = 10

    public arañar(){
        console.log("RAAAAS")
    }

    public saludar(): void {
        console.log("Hola, soy el gato "+this.nombre+" y digo MIAU MIAU")
    }    
}

//////////////////
// POLIMORFISMO //
//////////////////

let perros:Perro[] = [ 
    new Perro(),
    new Perro(),
]
let gatos:Gato[] = [ 
    new Gato(),
    new Gato()
]

let zoo:Animal[] = [ 
    new Perro(),
    new Gato()
]


zoo.forEach( (animal:Animal) => animal.saludar)

//Polimorfismo: referenciar a un objeto específico con una variable genérica
let perro = new Perro()
let animal1:Animal = new Perro()
let animal2:Animal = new Gato()

//
//CAST en TypeScript
//
let perro2:Perro = animal1 as Perro

//
//instanceof
//
zoo.forEach( (animal:Animal) => {

    console.log(animal.nombre)

    if( animal instanceof Perro){
        const p:Perro = animal as Perro
        console.log(p.numeroPulgas)
    } else if( animal instanceof Gato){
        const g:Gato = animal as Gato
        console.log(g.longitudBigotes)
    }


} )




//let x:Perro = new Gato()
//let y:Gato = new Perro()



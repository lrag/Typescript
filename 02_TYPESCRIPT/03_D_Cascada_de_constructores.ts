abstract class Animal {
    constructor(
        public nombre: string,
        public peso: number,
        public edad: number
    ) {
        if(nombre.trim().length == 0){
            throw new Error("El nombre no puede estar vacío")
        }        
        if(edad < 0){
            throw new Error("Edad no puede ser menor que cero")
        }        
        if(peso <= 0){
            throw new Error("El peso ha de ser mayor que cero")
        }        
    }
}

class Perro extends Animal {
    constructor(
        nombre: string,
        peso: number,
        edad: number,
        public numeroPulgas: number = 0
    ) {
        super(nombre, peso, edad)
        if(numeroPulgas < 0){
            throw new Error("Número de pulgas ha de ser cero o mayor")
        }        
    }
}

class PerroPolicia extends Perro {
    constructor(
        nombre: string,
        peso: number,
        edad: number,
        numeroPulgas: number = 0,
        public numeroCasosResueltos: number = 0
    ) {
        super(nombre, peso, edad, numeroPulgas)
        
        if(numeroCasosResueltos < 0){
            throw new Error("Número de casos ha de ser cero o mayor")
        }
    }
}

let rex = new PerroPolicia("",-1,-1,-1)
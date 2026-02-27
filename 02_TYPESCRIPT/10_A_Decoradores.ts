
console.log("========================================")

//La función decorador es una factoría que devuelve la verdadera función que se va a colocar delante del target
function Log(metodo: Function, contexto: ClassMethodDecoratorContext) {
    const nombreMetodo = String(contexto.name);

    return function (this: any, ...args: any[]) {
        console.log("Target: ",this) //El objeto que está recibiendo la llamada
        console.log("Método: ",nombreMetodo) //El método al que se está llamando
        console.log("Parametros: "+args) //Los parámetros con los que se está invocando

        //Código para hacer el log, ya generalizado
        console.log(`[LOG] Llamada a ${nombreMetodo} con los parámetros:`, args)
        
        const resultado = metodo.apply(this, args)
        
        return resultado;
    }
}

class Disco {
    constructor(
        public id    : number,
        public grupo : string,
        public titulo: string,
        public year  :number
    ){}
}

class ServicioDiscos {

    @Log
    public insertarDisco(disco:Disco):Disco {

        console.log("Llamada al metodo insertarDisco param: XX")
        
        disco.id = Math.round(Math.random()*10000)
        return disco
    }
    
    @Log
    public modificarDisco(disco:Disco):Disco {
        console.log("Llamada al metodo modificarDisco: param YY")
        disco.titulo = disco.titulo.toUpperCase()
        return disco
    }

    @Log
    public borrarDisco(disco:Disco):void {
        console.log("ffff")
    }

}

const disco = new Disco(0,"G1","D1",1)
const servicioDiscos = new ServicioDiscos()

servicioDiscos.insertarDisco(disco)
servicioDiscos.modificarDisco(disco)
servicioDiscos.borrarDisco(disco)


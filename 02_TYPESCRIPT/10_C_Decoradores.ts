
console.log("========================================")

//La función decorador es una factoría que devuelve la verdadera función que se va a colocar delante del target
function Decorador(metodo: Function, contexto: ClassMethodDecoratorContext) {
    const nombreMetodo = String(contexto.name);

    return function (this: any, ...args: any[]) {
        //Podemos modiciar los parámetros
        args = [ "HABER KE PASA" ]
        const resultado = metodo.apply(this, args)
        //Podemos modivicar el valor devuelto
        return "OTRA KOSA";
    }
}

class ServicioMovidas {

    @Decorador
    public metodo(texto:string):string {
        console.log("Texto: "+texto)
        return "trololo"
    }

}

const servicioMovidas = new ServicioMovidas()

console.log(servicioMovidas.metodo("a ver que pasa"))


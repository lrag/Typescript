import { AsyncLocalStorage } from 'async_hooks';

const storage = new AsyncLocalStorage<any>();


function RequiereRol(rolRequerido: string[]) {
    return function (metodo: Function, contexto: ClassMethodDecoratorContext) {
        const nombreMetodo = String(contexto.name);

        return function (this: any, ...args: any[]) {
            console.log(`--- [SEGURIDAD] Verificando acceso a: ${nombreMetodo} ---`);

            const rolUsuario = storage.getStore()?.usuario.rol

            //Un decorador es un interceptor
            if (!rolRequerido.find( r => r===rolUsuario)) {
                throw new Error(`Requiere ${rolRequerido}`);
            }

            return metodo.apply(this, args);
        };
    };
}

class ServicioFacturas {

    @RequiereRol(["USER", "ADMIN"])
    public emitirFactura():void {
        console.log("Emitiendo una facturita")
    }

    @RequiereRol(["FISTRO", "USER", "ADMIN"])
    public listarFacturas():void {
        console.log("Listando facturas")
    }
    
    @RequiereRol(["ADMIN"])
    public borrarFactura():void {
        console.log("Borrando una factura")
    }

}

const servicioFacturas = new ServicioFacturas()

storage.run({ usuario: { nombre: "Ringo Starr", rol: "FISTRO" } }, () => {
    try {
        servicioFacturas.emitirFactura()
    } catch (error) {
        console.log("ERROR! "+error)
    }
    try {
        servicioFacturas.listarFacturas()
    } catch (error) {
        console.log("ERROR! "+error)
    }
    try {
        servicioFacturas.borrarFactura()
    } catch (error) {
        console.log("ERROR! "+error)
    }    
});






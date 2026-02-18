import { Cliente } from './Cliente';
import { ClienteDao } from './ClienteDao';
import { FactoriaClienteDao } from './FactoriaClienteDao';

// ServicioClientes es una clase de alto nivel
// Depende de ClienteDao, que es de bajo nivel
// Tiene una relación de uso, no de composición
export class ServicioClientes_2 {

    // Ahora no estamos acoplando la clase de alto nivel con la de bajo nivel sino con una interfaz. 
    // Estamos respetando el principio de inversion de dependencias
    // Si las posibles implementaciones respetan el principio de sustitución de Liskov pues entonces ideal
    
    /*
    private clienteDao: ClienteDao = new ClienteDaoMysqlImplementation();
    
    constructor() {
        super() 
    }
    */
    
    // Retiramos la responsabilidad de crear el objeto
    // Esto es IoC. Ahora el que sabe crear ClienteDao es otro
    // Seguimos con los problemas para hacer test doubles <--
    /*
    private clienteDao: ClienteDao;
        
    constructor() {
        const tipoBBDD: string = "mongodb"; // Esto lo habríamos leído de un fichero de configuracion
        if(tipoBBDD === "mongodb") {
            this.clienteDao = new ClienteDaoMongoDBImplementation();
        } else if(tipoBBDD === "mysql") {
            this.clienteDao = new ClienteDaoMysqlImplementation();
        }
    }
    */

    private clienteDao: ClienteDao = FactoriaClienteDao.getClienteDao();

    constructor() {
        // Constructor vacío como en tu código original
    }
    
    public altaCliente(cliente: Cliente): void {
        console.log("Validando la dirección");
        console.log("Buscando una sucursal");
        console.log("Asignando un comercial");
        this.clienteDao.insertar(cliente);		
    }
    
}
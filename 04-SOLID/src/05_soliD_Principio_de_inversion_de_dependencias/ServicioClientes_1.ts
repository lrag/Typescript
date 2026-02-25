import { Cliente } from './Cliente';
import { ClienteDaoMysqlImplementation } from './ClienteDaoMysqlImplementation';

// ServicioClientes es una clase de alto nivel
// MAL DISEÑO: Depende de una implementación concreta (bajo nivel)
export class ServicioClientes_1 {

	//Estamos acoplando ServicioClientes con una implementación concreta de clienteDao
	//
	//Crear objetos con new en vez de simple es simplón
	//A ver quien hace un test double de esto...
	//ServicioClientes, además, tiene una responsabilidad que no le corresponde: crear el ClienteDao    
    private clienteDao: ClienteDaoMysqlImplementation = new ClienteDaoMysqlImplementation();
	
    public altaCliente(cliente: Cliente): void {
        console.log("Validando la dirección...");
        console.log("Buscando una sucursal...");
        console.log("Asignando un comercial...");
        
        this.clienteDao.insertar(cliente);		
    }
	
    public listarClientes(): Cliente[] {
        return [];
    }
	
}
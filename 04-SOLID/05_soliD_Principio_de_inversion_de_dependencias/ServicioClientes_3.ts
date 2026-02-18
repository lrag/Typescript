import { Cliente } from './Cliente';
import { ClienteDao } from './ClienteDao';

export class ServicioClientes_3 {

    private clienteDao: ClienteDao;
	
    // Inyección de dependencias: Esto está bien si tienes un contenedor
    // IoC también. 
	// Y ya podemos hacer test doubles.
    // Y no estamos acoplados con una implementación concreta de ClienteDao
    constructor(clienteDao: ClienteDao) {
        this.clienteDao = clienteDao;
    }
	
    public altaCliente(cliente: Cliente): void {
        console.log("Validando la dirección");
        console.log("Buscando una sucursal");
        console.log("Asignando un comercial");
        this.clienteDao.insertar(cliente);		
    }
	
}
import { ClienteDao } from './ClienteDao';
import { ClienteDaoMysqlImplementation } from './ClienteDaoMysqlImplementation';
import { ClienteDaoMongoDBImplementation } from './ClienteDaoMongoDBImplementation';

export class FactoriaClienteDao {

    public static getClienteDao(): ClienteDao  {
        
        let clienteDao: ClienteDao | null = null;
        
        // En un caso real, esto vendría de un .env o un archivo config.json
        const tipoBBDD: string = "mongodb"; 

		//In if anidado al año no hace daño
        if (tipoBBDD === "mongodb") {
            clienteDao = new ClienteDaoMongoDBImplementation();
        } else if (tipoBBDD === "mysql") {
            clienteDao = new ClienteDaoMysqlImplementation();
        } else {
			throw new Error(`BBDD no soportada: ${tipoBBDD}`);
		}
        
        return clienteDao;
    }
}
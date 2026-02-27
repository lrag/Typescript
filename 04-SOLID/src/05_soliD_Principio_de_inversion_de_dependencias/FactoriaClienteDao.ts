import { ClienteDao } from './ClienteDao';
import { ClienteDaoMysqlImplementation } from './ClienteDaoMysqlImplementation';
import { ClienteDaoMongoDBImplementation } from './ClienteDaoMongoDBImplementation';

export class FactoriaClienteDao {

    public static getClienteDao(): ClienteDao  {
        
        let clienteDao: ClienteDao | null = null;
        
        // En un caso real, esto vendría de un .env o un archivo config.json
        const tipoBBDD: string = "MongoDBb"; 

		//In if anidado al año no hace daño
        if (tipoBBDD === "MongoDBb") {
            clienteDao = new ClienteDaoMongoDBImplementation();
        } else if (tipoBBDD === "Mysql") {
            clienteDao = new ClienteDaoMysqlImplementation();
        } else {
			throw new Error(`BBDD no soportada: ${tipoBBDD}`);
		}
        
        return clienteDao;
    }
}

///////////////
// SINGLETON //
///////////////

import { Cliente } from './Cliente';

//
//Si la clase es nuestra podemos hacer que sea un singleton REAL
//
class ClienteDaoMongoDBImplementation_ implements ClienteDao {

    /*El singleton más sencillo del mundo:
    public static instancia:ClienteDaoMongoDBImplementation_ = new ClienteDaoMongoDBImplementation_()    
    
    private constructor(){
    }
    */

    //Lo mismo, pero con inicialización perezosa
    public static instancia:ClienteDaoMongoDBImplementation_    

    private constructor(){
    }

    public static getInstancia():ClienteDaoMongoDBImplementation_ {
        if(!ClienteDaoMongoDBImplementation_){
            ClienteDaoMongoDBImplementation_.instancia = new ClienteDaoMongoDBImplementation_()
        }
        return ClienteDaoMongoDBImplementation_.instancia
    }

    public insertar(cliente: Cliente): void {
        console.log("Insertando en ClienteDao (mongoDB): " + cliente.toString());
    }

    public modificar(cliente: Cliente): void {
    }

    public borrar(cliente: Cliente): void {
    }

    public listar(criterio: string): Cliente[] {
        return []; 
    }

    public buscarPorId(id: number): Cliente | null {
        return null;
    }
    
}

//
//Con esta factoria nos aseguramos de utizar simpre la misma instancia
//de una clase que no puede tener el constructor privado por el motivo que sea
//
class FactoriaClienteDao_ {

    public static instancia:ClienteDao

    public static getClienteDao(): ClienteDao  {
        
        if(!FactoriaClienteDao_.instancia){
            // En un caso real, esto vendría de un .env o un archivo config.json
            const tipoBBDD: string = "MongoDBb"; 

            //In if anidado al año no hace daño
            if (tipoBBDD === "MongoDBb") {
                FactoriaClienteDao_.instancia = new ClienteDaoMongoDBImplementation();
            } else if (tipoBBDD === "Mysql") {
                FactoriaClienteDao_.instancia = new ClienteDaoMysqlImplementation();
            } else {
                throw new Error(`BBDD no soportada: ${tipoBBDD}`);
            }
        }
        
        return FactoriaClienteDao_.instancia;
    }
}
import { Cliente } from './Cliente';
import { ClienteDao } from './ClienteDao';


export class ClienteDaoMongoDBImplementation implements ClienteDao {

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
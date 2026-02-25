import { Cliente } from './Cliente';

export interface ClienteDao {

	insertar(cliente: Cliente): void;
	modificar(cliente: Cliente): void;
	borrar(cliente: Cliente): void;
	listar(criterio: string): Cliente[];
	buscarPorId(id: number): Cliente | null;
	
}
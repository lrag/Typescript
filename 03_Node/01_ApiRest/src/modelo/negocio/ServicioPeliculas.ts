import { Pelicula } from '../entidades/Pelicula';
import { PeliculaRepository } from '../repositorios/PeliculaRepository';

export class PeliculaService {

    constructor(private repository: PeliculaRepository) {}

    async crearPelicula(datos: Omit<Pelicula, 'id'>): Promise<Pelicula> {
        const nuevaPelicula = new Pelicula(null, datos.titulo, datos.director, datos.genero, datos.year);
        return this.repository.save(nuevaPelicula);
    }

    async modificarPelicula(id: string, datosNuevos: Pelicula): Promise<void> {
        // Primero verificamos si existe (Regla de negocio)
        const peliculaExistente = await this.repository.findById(id);

        if (!peliculaExistente) {
            throw new Error("No se puede actualizar: La película no existe en la base de datos.");
        }

        // Podríamos añadir validaciones extra aquí antes de actualizar
        const exito = await this.repository.update(id, datosNuevos);

        if (!exito) {
            throw new Error("Error interno: La actualización no realizó ningún cambio.");
        }
    }

    async eliminarPelicula(id: string): Promise<void> {
        const exito = await this.repository.delete(id);

        if (!exito) {
            throw new Error(`No se pudo eliminar: La película con ID ${id} no existe.`);
        }
    }    

}
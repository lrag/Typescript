import { Pelicula } from '../entidades/Pelicula';
import { PeliculaRepository } from '../repositorios/PeliculaRepository';

export class PeliculaService {

    constructor(private repository: PeliculaRepository) {}

    async crearPelicula(datos: Omit<Pelicula, 'id'>): Promise<Pelicula> {
        const nuevaPelicula = new Pelicula('', datos.titulo, datos.director, datos.genero, datos.year);
        return this.repository.save(nuevaPelicula);
    }

    async modificarPelicula(pelicula: Pelicula): Promise<void> {
        const peliculaExistente = await this.repository.findById(pelicula.id);

        if (!peliculaExistente) {
            throw new Error("No se puede actualizar: La película no existe en la base de datos.");
        }

        const exito = await this.repository.update(pelicula.id, pelicula);

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
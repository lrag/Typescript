import { PeliculaModel } from '../activeRecords/PeliculaModel'; // Ajusta la ruta a tu modelo
import { Pelicula } from '../entidades/Pelicula';

export class PeliculaService {

    constructor() {}

    async crearPelicula(datos: Omit<Pelicula, 'id'>): Promise<Pelicula> {
        const nuevaPelicula = new PeliculaModel(datos);
        return await nuevaPelicula.save();
    }

    async modificarPelicula(pelicula:Pelicula): Promise<void> {
        const peliculaActualizada = await PeliculaModel.findByIdAndUpdate(pelicula.id, pelicula);

        if (!peliculaActualizada) {
            throw new Error("No se puede actualizar: La película no existe en la base de datos.");
        }
    }

    async eliminarPelicula(id: string): Promise<void> {
        const resultado = await PeliculaModel.findByIdAndDelete(id);

        if (!resultado) {
            throw new Error(`No se pudo eliminar: La película con ID ${id} no existe.`);
        }
    }

}
import { Pelicula } from '../entidades/Pelicula';
import { PeliculaRepository } from './PeliculaRepository';
import { PeliculaModel } from './PeliculaModel'; // El modelo que creamos antes

export class PeliculaRepositoryMongoose implements PeliculaRepository {

    async save(pelicula: Pelicula): Promise<Pelicula> {
        const doc = await PeliculaModel.create({
            titulo  : pelicula.titulo,
            director: pelicula.director,
            genero  : pelicula.genero,
            year    : pelicula.year
        });

        pelicula.id = doc.id; 
        return pelicula;
    }

    async update(id: string, pelicula: Pelicula): Promise<boolean> {
        const result = await PeliculaModel.findByIdAndUpdate(id, {
            titulo  : pelicula.titulo,
            director: pelicula.director,
            genero  : pelicula.genero,
            year    : pelicula.year
        });
        
        return result !== null;
    }

    async findAll(): Promise<Pelicula[]> {
        const peliculas = await PeliculaModel.find();
        return peliculas.map(d => new Pelicula(d.id, d.titulo, d.director, d.genero, d.year));
    }

    async findById(id: string): Promise<Pelicula | null> {
        const doc = await PeliculaModel.findById(id);
        if (!doc) return null;
        
        return new Pelicula(doc.id, doc.titulo, doc.director, doc.genero, doc.year);
    }

    async delete(id: string): Promise<boolean> {
        const result = await PeliculaModel.findByIdAndDelete(id);
        return result !== null;
    }
    
}
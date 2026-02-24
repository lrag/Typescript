import { Collection, MongoClient, ObjectId } from 'mongodb';
import { Pelicula } from '../entidades/Pelicula';
import { PeliculaRepository } from './PeliculaRepository';

export class PeliculaRepositoryMongoDB implements PeliculaRepository {

    private collection: Collection;

    constructor(client: MongoClient) {
        this.collection = client.db('ejemplo_01').collection('peliculas')
    }

    async save(pelicula: Pelicula): Promise<Pelicula> {
        const doc = { 
            titulo  : pelicula.titulo, 
            director: pelicula.director, 
            genero  : pelicula.genero, 
            year    : pelicula.year 
        };
        const result = await this.collection.insertOne(doc)
        pelicula.id = result.insertedId.toString()
        return pelicula
    }

    async update(id: string, pelicula: Pelicula): Promise<boolean> {
        const result = await this.collection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: { 
                    titulo  : pelicula.titulo, 
                    director: pelicula.director, 
                    genero  : pelicula.genero, 
                    year    : pelicula.year 
                } 
            }
        );
        return result.modifiedCount > 0
    }  

    async findAll(): Promise<Pelicula[]> {
        const docs = await this.collection.find().toArray()
        return docs.map((d: any) => new Pelicula(d._id.toString(), d.titulo, d.director, d.genero, d.year))
    }

    async findById(id: string): Promise<Pelicula | null> {
        const doc = await this.collection.findOne({ _id: new ObjectId(id) })
        if (!doc) return null;
        return new Pelicula(doc._id.toString(), doc.titulo, doc.director, doc.genero, doc.year)
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.collection.deleteOne({ _id: new ObjectId(id) })
        return result.deletedCount > 0
    }

}
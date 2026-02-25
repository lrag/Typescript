import { Schema, model, Document } from 'mongoose';
import { Pelicula } from '../entidades/Pelicula';

/*
export interface Pelicula extends Document {
    titulo: string;
    director: string;
    genero: string;
    year: number;
}
*/

const peliculaSchema = new Schema<Pelicula>({
    titulo: { 
        type: String, 
        required: [true, 'El título es obligatorio'], 
        trim: true 
    },
    director: { 
        type: String, 
        required: true 
    },
    genero: { 
        type: String, 
        required: true 
    },
    year: { 
        type: Number, 
        required: true,
        min: [1895, 'El cine no existía antes de 1895'] 
    }
}, {
    timestamps: true,
    versionKey: false 
});

export const PeliculaModel = model<Pelicula>('Pelicula', peliculaSchema);
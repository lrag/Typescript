import { Pelicula } from '../entidades/Pelicula';

export interface PeliculaRepository {
  save(pelicula: Pelicula): Promise<Pelicula>
  update(id: string, pelicula: Pelicula): Promise<boolean>
  findAll(): Promise<Pelicula[]>
  findById(id: string): Promise<Pelicula | null>
  delete(id: string): Promise<boolean>
}
import { Pelicula } from '../../modelo/entidades/Pelicula';

export interface PeliculaBaseDTO {
  titulo  : string
  director: string
  genero  : string
  year    : number
}

export interface PeliculaResponseDTO extends PeliculaBaseDTO {
  id: string
}

export class PeliculaDTOMapper {

    static toDTO(pelicula: Pelicula): PeliculaResponseDTO {
        const { id, titulo, director, genero, year } = pelicula
        
        return {
            id, 
            titulo,
            director,
            genero,
            year
        }
    }

    static toDTOList(peliculas: Pelicula[]): PeliculaResponseDTO[] {
        return peliculas.map(p => this.toDTO(p))
    }

    static toEntity(dto: PeliculaBaseDTO): Pelicula {
        return new Pelicula(
            '',
            dto.titulo,
            dto.director,
            dto.genero,
            dto.year
        );
    }    

}
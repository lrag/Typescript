
export interface PeliculaBaseDTO {
  titulo: string;
  director: string;
  genero: string;
  year: number;
  // ... imagina 20 propiedades más aquí
}

export interface PeliculaResponseDTO extends PeliculaBaseDTO {
  id: string;
}
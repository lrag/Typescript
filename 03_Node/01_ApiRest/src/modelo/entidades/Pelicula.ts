
export class Pelicula {
  constructor(
    public id: string | null,
    public titulo: string,
    public director: string,
    public genero: string,
    public year: number
  ) {}
}
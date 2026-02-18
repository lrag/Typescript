import { Capitulo } from './Capitulo';
import { Libro } from './Libro';

const c1 = new Capitulo(
    1,
    "Contra la estupidez...",
    "Lorem fistrum tiene musho peligro qué dise usteer ese pedazo de hasta luego Lucas..."
);

const c2 = new Capitulo(
    2,
    "...Los propios dioses...",
    "Lorem fistrum qué dise usteer pecador va usté muy cargadoo tiene musho peligro..."
);

const c3 = new Capitulo(
    3,
    "...¿Luchan en vano?",
    "Lorem fistrum la caidita condemor diodenoo no puedor ese pedazo de..."
);

const capitulos: Capitulo[] = [c1, c2, c3];

const libro = new Libro(
    "Los propios Dioses", 
    "Isaac Asimov", 
    1972, 
    capitulos
);

// libro.imprimir_MAL();
// System.out.println() en Java equivale a console.log()
console.log(libro.formatearTexto());
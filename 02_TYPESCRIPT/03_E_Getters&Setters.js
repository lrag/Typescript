"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula_2 = exports.Pelicula_1 = void 0;
var Pelicula_1 = /** @class */ (function () {
    function Pelicula_1(id, titulo, director, genero, year) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.genero = genero;
        this.year = year;
    }
    return Pelicula_1;
}());
exports.Pelicula_1 = Pelicula_1;
var Pelicula_2 = /** @class */ (function () {
    function Pelicula_2(_id, _titulo, _director, _genero, _year) {
        this._id = _id;
        this._titulo = _titulo;
        this._director = _director;
        this._genero = _genero;
        this._year = _year;
    }
    Object.defineProperty(Pelicula_2.prototype, "id", {
        //ID
        get: function () {
            console.log("Accediendo a ID");
            return this._id;
        },
        set: function (value) {
            console.log("Asignando ID");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pelicula_2.prototype, "titulo", {
        //TITULO
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pelicula_2.prototype, "director", {
        //DIRECTOR
        get: function () {
            return this._director;
        },
        set: function (value) {
            this._director = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pelicula_2.prototype, "genero", {
        //GENERO
        get: function () {
            return this._genero;
        },
        set: function (value) {
            this._genero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pelicula_2.prototype, "year", {
        //YEAR
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pelicula_2;
}());
exports.Pelicula_2 = Pelicula_2;
var p = new Pelicula_2(1, "Alien", "RS", "CI-FI", 1979);
p.id = 100;
var x = p.id;

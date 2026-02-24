"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    // En TS podemos definir y asignar propiedades directamente en el constructor
    // Usamos 'public' o 'private' para que TS cree la propiedad automáticamente
    function Libro(_titulo, _autor, _year, _capitulos) {
        if (_titulo === void 0) { _titulo = ""; }
        if (_autor === void 0) { _autor = ""; }
        if (_year === void 0) { _year = 0; }
        if (_capitulos === void 0) { _capitulos = []; }
        this._titulo = _titulo;
        this._autor = _autor;
        this._year = _year;
        this._capitulos = _capitulos;
    }
    Object.defineProperty(Libro.prototype, "titulo", {
        // Getters y Setters (Sintaxis nativa de TS/JS)
        get: function () { return this._titulo; },
        set: function (value) { this._titulo = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "autor", {
        get: function () { return this._autor; },
        set: function (value) { this._autor = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "capitulos", {
        get: function () { return this._capitulos; },
        set: function (value) { this._capitulos = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * Este método hace demasiadas cosas (Imprimir + Lógica de formato)
     */
    Libro.prototype.imprimir_MAL = function () {
        console.log(this._titulo);
        console.log("".concat(this._autor, ", ").concat(this._year, "\n"));
        //Encima tenemos modelo anémico
        for (var _i = 0, _a = this._capitulos; _i < _a.length; _i++) {
            var capitulo = _a[_i];
            console.log("Cap\u00EDtulo ".concat(capitulo.numero, "\n"));
            console.log(capitulo.titulo + "\n");
            console.log(capitulo.texto + "\n");
        }
        console.log("FIN");
    };
    /**
     * Un poco mejor: delega la responsabilidad al capítulo
     */
    Libro.prototype.imprimir_MAL_2 = function () {
        console.log(this._titulo);
        console.log("".concat(this._autor, ", ").concat(this._year, "\n"));
        this._capitulos.forEach(function (capitulo) {
            capitulo.imprimir_MAL();
        });
        console.log("FIN");
    };
    Libro.prototype.formatearTexto = function () {
        var texto = "".concat(this._titulo, "\n\n");
        texto += "".concat(this._autor, ", ").concat(this._year, "\n\n");
        texto += this._capitulos
            .map(function (capitulo) { return capitulo.formatearTexto(); })
            .join("");
        texto += "FIN";
        return texto;
    };
    return Libro;
}());
exports.Libro = Libro;

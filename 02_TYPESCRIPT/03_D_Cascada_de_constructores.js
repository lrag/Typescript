var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
        if (nombre.trim().length == 0) {
            throw new Error("El nombre no puede estar vacío");
        }
        if (edad < 0) {
            throw new Error("Edad no puede ser menor que cero");
        }
        if (peso <= 0) {
            throw new Error("El peso ha de ser mayor que cero");
        }
    }
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, peso, edad, numeroPulgas) {
        if (numeroPulgas === void 0) { numeroPulgas = 0; }
        var _this = _super.call(this, nombre, peso, edad) || this;
        _this.numeroPulgas = numeroPulgas;
        if (numeroPulgas < 0) {
            throw new Error("Número de pulgas ha de ser cero o mayor");
        }
        return _this;
    }
    return Perro;
}(Animal));
var PerroPolicia = /** @class */ (function (_super) {
    __extends(PerroPolicia, _super);
    function PerroPolicia(nombre, peso, edad, numeroPulgas, numeroCasosResueltos) {
        if (numeroPulgas === void 0) { numeroPulgas = 0; }
        if (numeroCasosResueltos === void 0) { numeroCasosResueltos = 0; }
        var _this = _super.call(this, nombre, peso, edad, numeroPulgas) || this;
        _this.numeroCasosResueltos = numeroCasosResueltos;
        if (numeroCasosResueltos < 0) {
            throw new Error("Número de casos ha de ser cero o mayor");
        }
        return _this;
    }
    return PerroPolicia;
}(Perro));
var rex = new PerroPolicia("", -1, -1, -1);

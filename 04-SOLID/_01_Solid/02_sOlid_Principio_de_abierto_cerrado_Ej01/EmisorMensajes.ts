import { Mensaje } from "./Mensaje";

//
//Esta interfaz es la 'clase que se queda cerrada'
//Está abierta a la extensión porque en cualquier momento podemos programar una nueva
//manera de enviar mensajes implementando esta interfaz (o heredando si fuera una clase)
//
export interface EmisorMensajes {
    enviarMensaje(mensaje: Mensaje): void;
}
import { EmisorMensajes } from './EmisorMensajes';
import { Mensaje } from './Mensaje';

export class EmisorMensajesPalomaMensajera implements EmisorMensajes {
    
    public enviarMensaje(mensaje: Mensaje): void {
        console.log(`Enviando paloma mensajera: ${mensaje.toString()}`);
    }
}
import { EmisorMensajes } from './EmisorMensajes';
import { Mensaje } from './Mensaje';

export class EmisorMensajesSMS implements EmisorMensajes {
    
    public enviarMensaje(mensaje: Mensaje): void {
        console.log(`Enviando SMS: ${mensaje.toString()}`);
    }
}
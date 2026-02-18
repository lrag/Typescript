import { EmisorMensajes } from './EmisorMensajes';
import { Mensaje } from './Mensaje';

export class EmisorMensajesCorreoE implements EmisorMensajes {
    
    public enviarMensaje(mensaje: Mensaje): void {
        console.log(`Enviando CorreoE: ${mensaje.toString()}`);
    }
}
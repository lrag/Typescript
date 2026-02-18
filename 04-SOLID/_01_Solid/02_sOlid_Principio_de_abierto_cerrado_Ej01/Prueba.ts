import { EmisorMensajes_MAL } from './EmisorMensajes_MAL';
import { Mensaje } from './Mensaje';
import { EmisorMensajes } from './EmisorMensajes';
import { EmisorMensajesSMS } from './EmisorMensajesSMS';
import { EmisorMensajesCorreoE } from './EmisorMensajesCorreoE';
import { EmisorMensajesPalomaMensajera } from './EmisorMensajesPalomaMensajera';

function main() {

    console.log("===============================================");
    const emm = new EmisorMensajes_MAL();
    emm.enviarMensaje("Fistro", "Te digo trigo por no llamarte Rodrigo", "SMS");
    emm.enviarMensaje("Fistro", "Te digo trigo por no llamarte Rodrigo", "CorreoE");

    console.log("===============================================");
    const m = new Mensaje("Torpedo", "Siete caballos vienen de bonanza");
    // Gracias al Polimorfismo, todas estas variables son de tipo 'EmisorMensajes'
    const em1: EmisorMensajes = new EmisorMensajesSMS();
    const em2: EmisorMensajes = new EmisorMensajesCorreoE();
    const em3: EmisorMensajes = new EmisorMensajesPalomaMensajera();

    // No importa qué hay dentro, sabemos que todas tienen el método 'enviarMensaje'
    em1.enviarMensaje(m);
    em2.enviarMensaje(m);
    em3.enviarMensaje(m);
}

main();
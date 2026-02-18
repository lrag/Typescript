export class EmisorMensajes_MAL {

    public enviarMensaje(destinatario: string, texto: string, tipo: string): void {
        // Tantas cosas aquí...
        switch (tipo) {
            case "SMS":
                // Código para enviar el SMS
                console.log(`Enviando SMS a ${destinatario}`);
                break;
            case "CorreoE":
                // Código para enviar el CorreoE
                console.log(`Enviando CorreoE a ${destinatario}`);
                break;
            case "Paloma mensajera":
                // Código para enviar una paloma mensajera
                console.log(`Enviando una paloma mensajera a ${destinatario}`);
                break;
            default:
                throw new Error("Método no soportado");
        }
    }

    /**
     * Si lo hubiéramos hecho así también estaríamos dejando esta clase abierta
     * (porque hay que modificar el switch), pero estaríamos respetando la S (Responsabilidad Única)
     */
    public enviarMensaje_BIS(destinatario: string, texto: string, tipo: string): void {
        switch (tipo) {
            case "SMS":
                this.enviarMensajeSMS(destinatario, texto, tipo);
                break;
            case "CorreoE":
                this.enviarMensajeCorreoE(destinatario, texto, tipo);
                break;
            case "Paloma mensajera":
                this.enviarMensajePalomaMensajera(destinatario, texto, tipo);
                break;
            default:
                throw new Error("Método no soportado");
        }
    }

    public enviarMensajeSMS(destinatario: string, texto: string, tipo: string): void {
        // Código para enviar el SMS
        console.log(`Enviando SMS a ${destinatario}`);
    }

    public enviarMensajeCorreoE(destinatario: string, texto: string, tipo: string): void {
        // Código para enviar el CorreoE
        console.log(`Enviando CorreoE a ${destinatario}`);
    }

    public enviarMensajePalomaMensajera(destinatario: string, texto: string, tipo: string): void {
        // Código para enviar una paloma mensajera
        console.log(`Enviando una paloma mensajera a ${destinatario}`);
    }
}
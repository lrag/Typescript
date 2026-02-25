import Fastify from 'fastify';
import mongoose from 'mongoose'; // 1. Importamos mongoose
import { PeliculaService } from './modelo/negocio/ServicioPeliculas';
import { EndpointPeliculas } from './endpoints/EndpointPeliculas';

const MONGO_URI = 'mongodb://localhost:27017/ejemplo_01'; 
const PORT = 3000;

const fastify = Fastify({ 
    logger: false 
});

async function main() {
    try {
        console.log('Conectando a MongoDB con Mongoose, utilizandolo como Active Record...');
        await mongoose.connect(MONGO_URI);
        console.log('Conexión establecida con éxito');

        const peliculaService = new PeliculaService();
        const endpointPeliculas = new EndpointPeliculas(peliculaService);
        
        await endpointPeliculas.registrarRutas(fastify);

        fastify.addHook('onClose', async () => {
            await mongoose.connection.close();
            console.log('Conexión a MongoDB (Mongoose) cerrada');
        });

        await fastify.listen({ 
            port: PORT, 
            host: '0.0.0.0' 
        });

        console.log(`Esperando peticiones en el puerto ${PORT}`);

    } catch (error) {
        console.error('ZASCA al arrancar la aplicación:', error);
        process.exit(1);
    }
}

//Compilación y ejecución en memoria: npm run dev
//Solo transpilar al destino        : npm run build   
//Transpilar y ejecutar             : npm run start   

main();
import Fastify from 'fastify';
import { MongoClient } from 'mongodb';
import { PeliculaRepositoryMongoDB } from './modelo/repositorios/PeliculaRepositoryMongoDB'
import { PeliculaService } from './modelo/negocio/ServicioPeliculas';
import { EndpointPeliculas } from './endpoints/EndpointPeliculas';

// Configuraciones (En un proyecto real, esto iría en un .env)
const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'ejemplo_01';
const PORT = 3000;

const fastify = Fastify({ 
  logger: false 
});

async function main() {
  try {

    const client = new MongoClient(MONGO_URI)
    fastify.log.info('Conectando a MongoDB...')
    await client.connect();
    fastify.log.info('OK');

    const peliculaRepo = new PeliculaRepositoryMongoDB(client)
    const peliculaService = new PeliculaService(peliculaRepo)
    const endpointPeliculas = new EndpointPeliculas(peliculaService, peliculaRepo)

    await endpointPeliculas.registrarRutas(fastify)

    fastify.addHook('onClose', async () => {
      await client.close();
      fastify.log.info('Conexión a MongoDB cerrada')
    });

    // 5. Encendido del motor
    await fastify.listen({ 
      port: PORT, 
      host: '0.0.0.0' 
    });

    console.log('Esperando peticiones en el puerto '+PORT)

  } catch (error) {
    fastify.log.error(error, 'ZASCA al arrancar la aplicación:')
    process.exit(1);
  }
}

//Compilación y ejecución en memoria: npm run dev
//Solo transpilar al destino        :npm run build   
//Transpilar y ejecutar             :npm run start   

main();
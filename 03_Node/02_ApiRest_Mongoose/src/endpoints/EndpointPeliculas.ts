import { FastifyInstance, FastifyReply, FastifyRequest, FastifySchema } from 'fastify'
import { Pelicula } from '../modelo/entidades/Pelicula'
import { PeliculaService as ServicioPeliculas } from '../modelo/negocio/ServicioPeliculas'
import { PeliculaBaseDTO, PeliculaResponseDTO, PeliculaDTOMapper } from './dto/DTOs'
import { PeliculaRepository } from '../modelo/repositorios/PeliculaRepository'

export class EndpointPeliculas {
    
    private readonly bodySchema: FastifySchema = {
        body: {
            type: 'object',
            required: ['titulo', 'director', 'year'],
            properties: {
                titul   : { type: 'string' },
                director: { type: 'string' },
                genero  : { type: 'string' },
                year    : { type: 'integer' }
            }
        }
    }

    constructor(
        private readonly servicioPeliculas: ServicioPeliculas,
        private readonly peliculaRepo: PeliculaRepository
    ) {}

    async registrarRutas(fastify: FastifyInstance) {
        console.log("Registrando rutas de EndpointPeliculas.")
        fastify.post<{ Body: PeliculaBaseDTO }>('/peliculas', { schema: this.bodySchema }, this.insertar.bind(this))
        fastify.put<{ Params: { id: string }, Body: PeliculaBaseDTO }>('/peliculas/:id', { schema: this.bodySchema }, this.modificar.bind(this))
        fastify.get('/peliculas', this.listar.bind(this))
        fastify.get<{ Params: { id: string } }>('/peliculas/:id', this.buscarPorId.bind(this))
        fastify.delete<{ Params: { id: string } }>('/peliculas/:id', this.borrarPorId.bind(this))
    }
    
    private async insertar(request: FastifyRequest<{ Body: PeliculaBaseDTO }>, reply: FastifyReply) {
        const pelicula = PeliculaDTOMapper.toEntity(request.body)
        const peliculaInsertada = await this.servicioPeliculas.crearPelicula(pelicula)
        return reply.status(201).send(PeliculaDTOMapper.toDTO(peliculaInsertada))
    }

    private async modificar(request: FastifyRequest<{ Params: { id: string }, Body: PeliculaBaseDTO }>, reply: FastifyReply) {
        const pelicula = PeliculaDTOMapper.toEntity(request.body)
        pelicula.id = request.params.id
        await this.servicioPeliculas.modificarPelicula(pelicula)
        return reply.send({ message: "Actualizada" })
    }

    private async listar(request: FastifyRequest, reply: FastifyReply) {
        const peliculas = await this.peliculaRepo.findAll()
        return PeliculaDTOMapper.toDTOList(peliculas)
    }

    private async buscarPorId(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
            const peliculaEncontrada = await this.peliculaRepo.findById(request.params.id)
            
            console.log("PELICULA ENCONTRADA: ", peliculaEncontrada)
            
            if(peliculaEncontrada){
                return reply.send(PeliculaDTOMapper.toDTO(peliculaEncontrada))
            }
            return reply.status(404).send({ error: 'Película no encontrada' })
        } catch (e: any) {
            return reply.status(500).send({ error: e.message })
        }
    }

    private async borrarPorId(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
            await this.servicioPeliculas.eliminarPelicula(request.params.id)
            return reply.status(204).send()
        } catch (e: any) {
            return reply.status(500).send({ error: e.message })
        }
    }

}
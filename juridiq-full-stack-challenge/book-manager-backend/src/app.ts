import Fastify from 'fastify';
import bookRoutes from './routes/bookRoutes';
import fastifyCors from '@fastify/cors';

export const createServer = () => {
  const server = Fastify();

  // Configurar CORS
  server.register(fastifyCors, {
    origin: 'http://localhost:3001', // URL do frontend
    methods: ['GET', 'POST']
  });

  // Registrar rotas
  server.register(bookRoutes);

  return server;
};

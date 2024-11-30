import { FastifyInstance } from 'fastify';
import { createBookHandler, getBooksHandler } from '../controllers/bookController';

const bookRoutes = async (server: FastifyInstance) => {
  server.post('/books', createBookHandler);
  server.get('/books', getBooksHandler);
};

export default bookRoutes;

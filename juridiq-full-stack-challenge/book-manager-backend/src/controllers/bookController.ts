import { FastifyReply, FastifyRequest } from 'fastify';
import { addBook, getBooks } from '../services/bookService';

export const createBookHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { title, author, publishedYear } = request.body as any;

  if (!title || !author || typeof publishedYear !== 'number') {
    return reply.status(400).send({ error: 'Invalid input' });
  }

  const book = addBook(title, author, publishedYear);
  return reply.status(201).send(book);
};

export const getBooksHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { title } = request.query as any;
  const books = getBooks(title);
  return reply.send(books);
};

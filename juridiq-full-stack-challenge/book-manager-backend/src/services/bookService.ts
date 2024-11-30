import { Book } from '../models/bookModel';
import { v4 as uuidv4 } from 'uuid';

const books: Book[] = [];

export const addBook = (title: string, author: string, publishedYear: number): Book => {
  const book: Book = { id: uuidv4(), title, author, publishedYear };
  books.push(book);
  return book;
};

export const getBooks = (title?: string): Book[] => {
  if (title) {
    return books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }
  return books;
};

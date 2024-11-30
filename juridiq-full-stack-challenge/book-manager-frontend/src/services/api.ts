import axios from 'axios';
import { Book } from '../../../book-manager-backend/src/models/bookModel';

const API_BASE_URL = 'http://localhost:3000';


export const fetchBooks = async (filter: string) => {
  const response = await axios.get(`${API_BASE_URL}/books`, {
    params: { title: filter },
  });
  return response.data;
};

export const addBook = async (book: Book) => {
  await axios.post(`${API_BASE_URL}/books`, book);
};
import { Box, Heading, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { fetchBooks } from '../services/api';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchBooks(filter).then(setBooks);
  }, [filter]);

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Heading>Lista de Livros</Heading>
      <Input
        placeholder="Filtrar por título"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <BookList books={books} />
    </VStack>
  );
};

export default Home;
